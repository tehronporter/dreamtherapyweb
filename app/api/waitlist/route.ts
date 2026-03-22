import { NextResponse } from "next/server";

import { getSupabaseAdminConfig } from "@/lib/supabase";
import {
  isValidEmail,
  normalizeEmail,
  sanitizeOptionalValue,
  WAITLIST_DEFAULTS,
  type WaitlistPayload,
} from "@/lib/waitlist";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";

  return `${ip}:${userAgent.slice(0, 120)}`;
}

function isRateLimited(identifier: string) {
  const now = Date.now();

  if (rateLimitStore.size > 500) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetAt <= now) {
        rateLimitStore.delete(key);
      }
    }
  }

  const entry = rateLimitStore.get(identifier);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count += 1;
  return false;
}

function buildSupabaseInsertErrorMessage(status: number, payload: unknown) {
  if (
    status === 409 &&
    typeof payload === "object" &&
    payload !== null &&
    "code" in payload &&
    payload.code === "23505"
  ) {
    return {
      status: 200,
      body: {
        ok: true,
        duplicate: true,
        message: "You're already on the list.",
      },
    };
  }

  return {
    status: 500,
    body: {
      ok: false,
      message: "We couldn't save your email right now. Please try again shortly.",
    },
  };
}

export async function POST(request: Request) {
  const clientIdentifier = getClientIdentifier(request);

  if (isRateLimited(clientIdentifier)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many attempts in a short time. Please wait a few minutes and try again.",
      },
      { status: 429 },
    );
  }

  let payload: WaitlistPayload;

  try {
    const rawPayload = await request.json();

    if (!rawPayload || typeof rawPayload !== "object") {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    payload = rawPayload as WaitlistPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const company = typeof payload.company === "string" ? payload.company : "";

  if (company.trim()) {
    return NextResponse.json({ ok: true, message: "You're on the list." });
  }

  const email = normalizeEmail(
    typeof payload.email === "string" ? payload.email : "",
  );

  if (!email) {
    return NextResponse.json(
      { ok: false, message: "Please enter your email address." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  let serviceRoleKey: string;
  let url: string;

  try {
    ({ serviceRoleKey, url } = getSupabaseAdminConfig());
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Waitlist signups are not configured yet. Please try again shortly.",
      },
      { status: 500 },
    );
  }

  const response = await fetch(`${url}/rest/v1/waitlist_signups`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify([
      {
        email,
        source: WAITLIST_DEFAULTS.source,
        label: WAITLIST_DEFAULTS.label,
        status: WAITLIST_DEFAULTS.status,
        utm_source: sanitizeOptionalValue(payload.utm_source),
        utm_campaign: sanitizeOptionalValue(payload.utm_campaign),
        utm_medium: sanitizeOptionalValue(payload.utm_medium),
      },
    ]),
    cache: "no-store",
  });

  if (!response.ok) {
    let errorPayload: unknown = null;

    try {
      errorPayload = await response.json();
    } catch {
      errorPayload = null;
    }

    const errorResult = buildSupabaseInsertErrorMessage(
      response.status,
      errorPayload,
    );

    return NextResponse.json(errorResult.body, { status: errorResult.status });
  }

  return NextResponse.json({
    ok: true,
    message: "You're on the list.",
  });
}
