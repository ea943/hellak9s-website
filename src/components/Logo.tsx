import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="font-display flex items-center text-2xl font-bold tracking-tight">
      <span className={light ? "text-white" : "text-ink"}>HELLA</span>
      <span className="text-brand">K9S</span>
    </Link>
  );
}
