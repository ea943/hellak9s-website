"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/icons/Icon";
import { programs } from "@/lib/data/programs";
import { locations } from "@/lib/data/locations";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Locations",
    href: "/locations",
    children: locations.map((l) => ({ label: `${l.city}, ${l.stateAbbr}`, href: `/locations/${l.slug}` })),
  },
  {
    label: "Services",
    href: "/services",
    children: programs.map((p) => ({ label: p.title, href: `/services/${p.slug}` })),
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Mission", href: "/about" },
      { label: "Become a Trainer", href: "/apply" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${scrolled ? "shadow-md shadow-black/5" : ""}`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-brand"
              >
                {link.label}
                {link.children && <Icon name="chevronDown" className="h-3.5 w-3.5" />}
              </Link>
              {link.children && openDropdown === link.label && (
                <div className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-xl border border-black/5 bg-white py-2 shadow-2xl shadow-black/10">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-medium text-ink/80 hover:bg-brand/5 hover:text-brand"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/franchise"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Franchise
          </Link>
          <Link
            href="/apply"
            className="rounded-md border-2 border-brand px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Apply as Trainer
          </Link>
        </div>

        <button
          className="text-ink lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} className="h-7 w-7" />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/5 bg-white px-6 pb-6 lg:hidden">
          <nav className="flex flex-col divide-y divide-black/5">
            {navLinks.map((link) => (
              <div key={link.label} className="py-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-base font-semibold text-ink"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      aria-label={`Toggle ${link.label} submenu`}
                      onClick={() => setMobileExpanded((v) => (v === link.label ? null : link.label))}
                      className="p-2 text-ink/60"
                    >
                      <Icon
                        name="chevronDown"
                        className={`h-4 w-4 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {link.children && mobileExpanded === link.label && (
                  <div className="flex flex-col gap-1 pb-2 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1.5 text-sm text-ink/70 hover:text-brand"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/franchise"
              onClick={() => setMobileOpen(false)}
              className="rounded-md bg-brand px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
            >
              Franchise
            </Link>
            <Link
              href="/apply"
              onClick={() => setMobileOpen(false)}
              className="rounded-md border-2 border-brand px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-brand"
            >
              Apply as Trainer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
