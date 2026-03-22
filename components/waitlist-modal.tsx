"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";

import { isValidEmail, normalizeEmail } from "@/lib/waitlist";

type WaitlistState =
  | {
      status: "idle" | "submitting";
      message: string | null;
    }
  | {
      status: "success";
      message: string;
      detail: string;
    }
  | {
      status: "error";
      message: string;
    };

function getUtmValue(searchParams: URLSearchParams, key: string) {
  const value = searchParams.get(key)?.trim();
  return value ? value.slice(0, 200) : null;
}

export function WaitlistModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<WaitlistState>({
    status: "idle",
    message: null,
  });

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    const handleClose = () => {
      triggerRef.current?.focus();
    };

    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, []);

  function openModal() {
    const dialog = dialogRef.current;

    if (!dialog || dialog.open) {
      return;
    }

    setFormState({ status: "idle", message: null });
    dialog.showModal();

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = normalizeEmail(email);
    const form = event.currentTarget;
    const honeypotInput = form.elements.namedItem("company");
    const company =
      honeypotInput instanceof HTMLInputElement ? honeypotInput.value : "";

    if (!normalizedEmail) {
      setFormState({
        status: "error",
        message: "Please enter your email address.",
      });
      return;
    }

    if (!isValidEmail(normalizedEmail)) {
      setFormState({
        status: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setFormState({ status: "submitting", message: null });

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          utm_source: getUtmValue(searchParams, "utm_source"),
          utm_campaign: getUtmValue(searchParams, "utm_campaign"),
          utm_medium: getUtmValue(searchParams, "utm_medium"),
          company,
        }),
      });

      const data = (await response.json()) as {
        ok: boolean;
        message?: string;
        duplicate?: boolean;
      };

      if (!response.ok || !data.ok) {
        setFormState({
          status: "error",
          message:
            data.message ||
            "We couldn't save your email right now. Please try again shortly.",
        });
        return;
      }

      setEmail("");
      setFormState({
        status: "success",
        message: data.message || "You're on the list.",
        detail: data.duplicate
          ? "You're already set. We'll reach out when there's something worth sharing."
          : "We'll let you know when there's something worth sharing.",
      });
    } catch {
      setFormState({
        status: "error",
        message: "We couldn't save your email right now. Please try again shortly.",
      });
    }
  }

  const isSubmitting = formState.status === "submitting";
  const isSuccess = formState.status === "success";

  return (
    <>
      <button
        type="button"
        className="button button--secondary site-header__waitlist-button"
        onClick={openModal}
        ref={triggerRef}
      >
        Join the waitlist
      </button>

      <dialog
        ref={dialogRef}
        className="waitlist-dialog"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeModal();
          }
        }}
        onCancel={() => {
          setFormState({ status: "idle", message: null });
        }}
      >
        <div className="waitlist-dialog__panel">
          <button
            type="button"
            className="waitlist-dialog__close"
            onClick={closeModal}
            aria-label="Close waitlist form"
          >
            <span aria-hidden="true">X</span>
          </button>

          <p className="waitlist-dialog__eyebrow">Launch updates</p>
          <h2 id={titleId} className="waitlist-dialog__title">
            Join the DreamTherapy waitlist
          </h2>
          <p id={descriptionId} className="waitlist-dialog__description">
            Be first to hear about launch updates, new features, and
            DreamTherapy news.
          </p>

          {isSuccess ? (
            <div className="waitlist-dialog__success" role="status" aria-live="polite">
              <p className="waitlist-dialog__success-title">{formState.message}</p>
              <p className="waitlist-dialog__success-text">
                {formState.detail}
              </p>
              <button
                type="button"
                className="button button--secondary waitlist-dialog__done"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          ) : (
            <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
              <label className="waitlist-form__label" htmlFor="waitlist-email">
                Email address
              </label>
              <input
                ref={inputRef}
                id="waitlist-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="waitlist-form__input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={formState.status === "error"}
                aria-describedby="waitlist-helper waitlist-status"
                disabled={isSubmitting}
              />
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="waitlist-form__honeypot"
                aria-hidden="true"
              />
              <button
                type="submit"
                className="button button--primary waitlist-form__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join the waitlist"}
              </button>
              <p id="waitlist-helper" className="waitlist-form__helper">
                Occasional updates only. Unsubscribe anytime.
              </p>
              <p className="waitlist-form__privacy">
                We handle launch updates carefully. Read our{" "}
                <Link href="/privacy" className="text-link" onClick={closeModal}>
                  privacy policy
                </Link>
                .
              </p>
              <p
                id="waitlist-status"
                className={`waitlist-form__status waitlist-form__status--${formState.status}`}
                role={formState.status === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {formState.message}
              </p>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
