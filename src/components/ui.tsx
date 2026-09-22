import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icons/Icon";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  dark = true,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${dark ? "bg-ink" : "bg-white text-ink"} ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand">
      <span className="h-px w-6 bg-brand" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      {eyebrow && (
        <div className={`mb-4 flex ${center ? "justify-center" : ""}`}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-lg text-white/60">{description}</p>}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
  icon = "arrowRight",
  type,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  icon?: IconName | null;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const variants: Record<string, string> = {
    solid: "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-light hover:-translate-y-0.5",
    outline: "border-2 border-white/80 text-white hover:border-brand hover:text-brand hover:-translate-y-0.5",
    ghost: "border-2 border-brand text-brand hover:bg-brand hover:text-white hover:-translate-y-0.5",
  };

  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${buttonBase} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={`${buttonBase} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}

export function IconBadge({ icon, size = "md" }: { icon: IconName; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "h-9 w-9", md: "h-12 w-12", lg: "h-16 w-16" };
  const iconSizes = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-8 w-8" };
  return (
    <span
      className={`inline-flex ${sizes[size]} items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand`}
    >
      <Icon name={icon} className={iconSizes[size]} />
    </span>
  );
}

export function Card({ children, className = "", highlight = false }: { children: ReactNode; className?: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-2xl border ${highlight ? "border-brand/60" : "border-white/10"} bg-ink-card/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/5 ${className}`}
    >
      {children}
    </div>
  );
}
