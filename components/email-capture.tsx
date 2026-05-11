"use client";

import { useState } from "react";

import { homeContent } from "@/lib/site";

type FormState = "idle" | "loading" | "success" | "error";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const content = homeContent.emailCapture;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || state === "loading") return;

    setState("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), company: "" }),
      });

      const data = (await res.json()) as { ok: boolean; message: string };

      if (data.ok) {
        setState("success");
        setMessage(content.successMessage);
        setEmail("");
      } else {
        setState("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="email-capture">
      <div className="email-capture__copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="email-capture__title">{content.title}</h2>
        <p className="email-capture__description">{content.description}</p>
      </div>

      {state === "success" ? (
        <p className="email-capture__success">{message}</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="email-capture__form"
          noValidate
        >
          {/* Honeypot field — hidden from real users, catches bots */}
          <input
            type="text"
            name="company"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />
          <div className="email-capture__row">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (state === "error") setState("idle");
              }}
              placeholder={content.placeholder}
              className="email-capture__input"
              required
              aria-label="Email address"
              disabled={state === "loading"}
            />
            <button
              type="submit"
              className="button button--primary"
              disabled={state === "loading" || !email.trim()}
            >
              {state === "loading" ? "Saving…" : content.cta}
            </button>
          </div>
          {state === "error" && (
            <p className="email-capture__error" role="alert">
              {message}
            </p>
          )}
          <p className="email-capture__privacy">{content.privacyNote}</p>
        </form>
      )}
    </section>
  );
}
