"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui";
import { Field, FormStatus } from "@/components/forms/fields";

export function FranchiseForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(undefined);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      desiredLocation: data.get("desiredLocation"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/franchise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : undefined);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-2xl bg-white p-8 text-ink sm:p-10">
      <Field label="Full Name">
        <input name="fullName" type="text" placeholder="Full Name" className="w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
      </Field>
      <Field label="Email" required>
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
      </Field>
      <Field label="Phone" required>
        <input name="phone" type="tel" required placeholder="Phone" className="w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
      </Field>
      <Field label="Desired Location">
        <input name="desiredLocation" type="text" placeholder="City, State" className="w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
      </Field>
      <Field label="Message">
        <textarea name="message" placeholder="Tell us about your interest in a HellaK9s franchise" className="min-h-32 w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
      </Field>

      <Button type="submit" className="w-full !bg-brand" icon="arrowRight">
        {status === "loading" ? "Submitting..." : "Request Information"}
      </Button>

      <FormStatus status={status} success="Thanks — your franchise request has been received. We'll be in touch soon." error={error} />
    </form>
  );
}
