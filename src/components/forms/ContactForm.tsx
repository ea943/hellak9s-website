"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui";
import { Field, Input, Textarea, FormStatus } from "@/components/forms/fields";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(undefined);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      subject: data.get("subject"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
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
    <form onSubmit={onSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-ink-card/60 p-8">
      <Field label="Name" required>
        <Input name="name" type="text" placeholder="Your name" required />
      </Field>
      <Field label="Email" required>
        <Input name="email" type="email" placeholder="Your email address" required />
      </Field>
      <Field label="Phone">
        <Input name="phone" type="tel" placeholder="Best number to reach you" />
      </Field>
      <Field label="Subject" required>
        <Input name="subject" type="text" placeholder="What can we help you with?" required />
      </Field>
      <p className="-mt-4 text-xs text-white/40">Examples: Training program, Behavior help, Trainer application, Franchise inquiry</p>
      <Field label="Message" required>
        <Textarea name="message" placeholder="Tell us how we can help..." required />
      </Field>

      <p className="text-center text-sm text-white/50">
        Our team typically responds within <span className="font-bold text-white">1 business day</span>.
      </p>

      <Button type="submit" className="w-full" icon="send">
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      <FormStatus status={status} success="Thanks — your message has been sent. We'll be in touch soon." error={error} />
    </form>
  );
}
