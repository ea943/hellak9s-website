import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button, Card, Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons/Icon";
import { programs, getProgram } from "@/lib/data/programs";
import { locations } from "@/lib/data/locations";
import { images } from "@/lib/images";

const heroImages: Record<string, string> = {
  "private-lessons": images.dogPathWalk,
  "board-and-train": images.shepherdCloseup,
  "day-train": images.puppyBowtie,
  "group-classes": images.puppyTulip,
  "raise-and-train": images.puppyGolden,
};

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return { title: program.title, description: program.description };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const normalize = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/\s+/g, " ").trim();
  const offeringLocations = locations.filter((l) =>
    l.services.some((s) => normalize(s) === normalize(program.title))
  );

  return (
    <>
      <PageHero eyebrow="Program" title={program.title} description={program.tagline} image={heroImages[program.slug] ?? images.dogPathWalk} />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-white">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/65">{program.description}</p>
                <ul className="mt-8 space-y-3">
                  {program.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/75">
                      <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-12 rounded-2xl border border-brand/30 bg-brand/5 p-8">
                  <h3 className="font-display text-xl font-bold text-white">Say less. Train more.</h3>
                  <p className="mt-3 text-white/60">
                    Every HellaK9s program is built on the same foundation: play, clarity, and purpose. We train the
                    intent behind behavior, not just the behavior itself, so results carry into real life.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <Card className="sticky top-28">
                <h3 className="font-display text-lg font-bold text-white">Available At</h3>
                <ul className="mt-4 space-y-3">
                  {(offeringLocations.length ? offeringLocations : locations).map((l) => (
                    <li key={l.slug}>
                      <a href={`/locations/${l.slug}`} className="flex items-center justify-between text-sm text-white/65 hover:text-brand">
                        <span>
                          {l.city}, {l.stateAbbr}
                        </span>
                        <Icon name="arrowRight" className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
                <Button href="/contact" className="mt-6 w-full">
                  Get Started
                </Button>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-soft">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Explore" title="Other Programs" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs
              .filter((p) => p.slug !== program.slug)
              .map((p, i) => (
                <Reveal key={p.slug} delay={i * 70}>
                  <a href={`/services/${p.slug}`} className="block h-full">
                    <Card className="h-full">
                      <div className="relative mb-4 h-32 overflow-hidden rounded-lg">
                        <Image src={heroImages[p.slug] ?? images.dogPathWalk} alt={p.title} fill className="object-cover" />
                      </div>
                      <h4 className="font-display font-bold text-white">{p.title}</h4>
                      <p className="mt-1 text-xs text-white/50">{p.tagline}</p>
                    </Card>
                  </a>
                </Reveal>
              ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
