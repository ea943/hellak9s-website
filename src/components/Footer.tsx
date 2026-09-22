import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/icons/Icon";
import { siteInfo } from "@/lib/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">{siteInfo.tagline}</p>
          <div className="mt-5 flex gap-3">
            {(["facebook", "instagram", "youtube"] as const).map((name) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-brand hover:text-brand"
              >
                <Icon name={name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li><Link href="/locations" className="hover:text-brand">Locations</Link></li>
            <li><Link href="/services" className="hover:text-brand">Services</Link></li>
            <li><Link href="/about" className="hover:text-brand">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Business</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li><Link href="/franchise" className="hover:text-brand">Franchise Opportunities</Link></li>
            <li><Link href="/apply" className="hover:text-brand">Become a Trainer</Link></li>
            <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>Email: <a href={`mailto:${siteInfo.email}`} className="hover:text-brand">{siteInfo.email}</a></li>
            <li>Phone: <a href={`tel:${siteInfo.footerPhone.replace(/\s/g, "")}`} className="hover:text-brand">{siteInfo.footerPhone}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
