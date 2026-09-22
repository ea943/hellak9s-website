"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui";
import { Field, FormStatus } from "@/components/forms/fields";

export function TrainerApplyForm() {
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
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      country: data.get("country"),
      postalCode: data.get("postalCode"),
      dogExperience: data.get("dogExperience"),
      certifications: data.get("certifications"),
      whyJoin: data.get("whyJoin"),
    };

    try {
      const res = await fetch("/api/trainer-apply", {
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
      <Field label="Street Address">
        <input name="address" type="text" placeholder="Address" className="w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
      </Field>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="City">
          <input name="city" type="text" placeholder="City" className="w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
        </Field>
        <Field label="State">
          <input name="state" type="text" placeholder="State" className="w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Country">
          <input name="country" type="text" placeholder="Country" className="w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
        </Field>
        <Field label="Postal Code">
          <input name="postalCode" type="text" placeholder="Postal Code" className="w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
        </Field>
      </div>
      <Field label="Dog Experience">
        <textarea
          name="dogExperience"
          placeholder="Tell us about your dog ownership, training experience, shelter volunteering, fostering, or any other relevant experience."
          className="min-h-28 w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand"
        />
      </Field>
      <Field label="Certifications (if any)">
        <textarea
          name="certifications"
          placeholder="Not required — many of our trainers started without certifications."
          className="min-h-24 w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand"
        />
      </Field>
      <Field label="Why Join HellaK9s?">
        <textarea name="whyJoin" className="min-h-28 w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-brand" />
      </Field>

      <Button type="submit" className="w-full !bg-brand" icon="arrowRight">
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </Button>

      <FormStatus status={status} success="Thanks — your application has been received. We'll be in touch soon." error={error} />
    </form>
  );
}
