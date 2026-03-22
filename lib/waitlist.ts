const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const WAITLIST_DEFAULTS = {
  source: "website",
  label: "header_waitlist",
  status: "active",
} as const;

export type WaitlistPayload = {
  email: string;
  utm_source?: string | null;
  utm_campaign?: string | null;
  utm_medium?: string | null;
  company?: string;
};

export function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value);
}

export function sanitizeOptionalValue(value?: string | null | unknown) {
  const normalized = typeof value === "string" ? value.trim() : "";
  return normalized ? normalized.slice(0, 200) : null;
}
