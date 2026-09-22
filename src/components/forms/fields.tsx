import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldBase =
  "w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand";

export function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/80">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${fieldBase} ${props.className ?? ""}`} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldBase} min-h-32 resize-y ${props.className ?? ""}`} />;
}

export function FormNote({ children }: { children: React.ReactNode }) {
  return <p className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white/60">{children}</p>;
}

export function FormStatus({ status, success, error }: { status: "idle" | "loading" | "success" | "error"; success: string; error?: string }) {
  if (status === "success") {
    return <p className="rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm font-medium text-brand">{success}</p>;
  }
  if (status === "error") {
    return (
      <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400">
        {error ?? "Something went wrong. Please try again."}
      </p>
    );
  }
  return null;
}
