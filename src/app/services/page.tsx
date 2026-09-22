import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Container, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/icons/Icon";
import { programs } from "@/lib/data/programs";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Training Programs",
  description: "Explore HellaK9s training programs: Private Lessons, Board & Train, Day Train, Group Classes, and Raise & Train.",
};

const programImages = [images.dogPathWalk, images.shepherdCloseup, images.puppyBowtie, images.puppyTulip, images.puppyGolden];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Our Training Programs"
        description="Training options built around your dog, your lifestyle, and real-world results."
        image={images.dogPathWalk}
      />

      <Section>
        <Container>
          <div className="space-y-10">
            {programs.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <div
                  className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <Card>
                    <IconRow icon={p.icon} />
                    <h2 className="font-display mt-5 text-3xl font-bold text-white">{p.title}</h2>
                    <p className="mt-2 text-base font-semibold text-brand">{p.tagline}</p>
                    <p className="mt-4 text-white/60">{p.description}</p>
                    <ul className="mt-6 space-y-2.5">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-white/65">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${p.slug}`}
                      className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-light"
                    >
                      Learn More <Icon name="arrowRight" className="h-4 w-4" />
                    </Link>
                  </Card>
                  <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
                    <Image src={programImages[i]} alt={p.title} fill className="object-cover" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-soft text-center">
        <Container>
          <Reveal>
            <SectionHeading title="Not sure which program fits?" description="Tell us about your dog and goals — we'll point you to the right path." />
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Talk to Our Team</Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function IconRow({ icon }: { icon: "home" | "moon" | "sun" | "users" | "sprout" }) {
  return (
    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand">
      <Icon name={icon} className="h-6 w-6" />
    </span>
  );
}
