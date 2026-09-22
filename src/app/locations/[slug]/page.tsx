import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, Card, Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons/Icon";
import { locations, getLocation } from "@/lib/data/locations";
import { getProgram } from "@/lib/data/programs";
import { images } from "@/lib/images";

const heroImages = [images.shepherdCloseup, images.puppyBowtie, images.puppyTulip, images.dogPathWalk, images.puppyGolden];

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: `HellaK9s ${location.city}`,
    description: `Professional dog training in ${location.city}, ${location.state}. Modern, relationship-based training built on clarity and structure.`,
  };
}

const programSlugFor = (service: string) => service.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const index = locations.findIndex((l) => l.slug === slug);

  return (
    <>
      <PageHero
        eyebrow={location.state}
        title={`HellaK9s ${location.city}`}
        description={`Professional Dog Training in ${location.city}`}
        image={heroImages[index % heroImages.length]}
      >
        <p className="mx-auto mt-2 max-w-xl text-white/60">Modern, relationship-based training built on clarity and structure.</p>
      </PageHero>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-white">Professional Dog Training in {location.city}</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/65">
                  HellaK9s {location.city} provides structured, professional dog training designed to create confident,
                  reliable dogs in real-world environments.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-white/65">
                  Our programs focus on engagement, clear communication, and purpose-driven training — helping dogs
                  build lasting obedience and balanced behavior.
                </p>
                <p className="font-display mt-6 text-xl font-bold text-brand">Say less. Train more.</p>
              </Reveal>

              <Reveal delay={120}>
                <h3 className="font-display mt-14 text-2xl font-bold text-white">Training Programs in {location.city}</h3>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {location.services.map((service) => {
                    const program = getProgram(programSlugFor(service));
                    return (
                      <Card key={service}>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand">
                            <Icon name={program?.icon ?? "home"} className="h-5 w-5" />
                          </span>
                          <h4 className="font-display font-bold text-white">{service}</h4>
                        </div>
                        <p className="mt-3 text-sm text-white/55">
                          {program?.tagline ?? "Professional, structured training tailored to your goals."}
                        </p>
                        {program && (
                          <ul className="mt-3 space-y-1.5">
                            {program.bullets.slice(0, 3).map((b) => (
                              <li key={b} className="text-xs text-white/50">
                                • {b}
                              </li>
                            ))}
                          </ul>
                        )}
                        {program && (
                          <a
                            href={`/services/${program.slug}`}
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-light"
                          >
                            Learn More <Icon name="arrowRight" className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <Card className="sticky top-28">
                <h3 className="font-display text-lg font-bold text-white">Location Details</h3>
                <ul className="mt-5 space-y-5">
                  <li className="flex items-start gap-3">
                    <Icon name="mapPin" className="mt-0.5 h-5 w-5 text-brand" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-white/40">Address</p>
                      <p className="text-white/75">{location.city} Location</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="phone" className="mt-0.5 h-5 w-5 text-brand" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-white/40">Phone</p>
                      <a href={`tel:${location.phone.replace(/[^\d+]/g, "")}`} className="text-white/75 hover:text-brand">
                        {location.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="mail" className="mt-0.5 h-5 w-5 text-brand" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-white/40">Email</p>
                      <a href={`mailto:${location.email}`} className="text-white/75 hover:text-brand">
                        {location.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="clock" className="mt-0.5 h-5 w-5 text-brand" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-white/40">Hours</p>
                      <p className="text-white/75">{location.hours}</p>
                    </div>
                  </li>
                </ul>
                <Button href="/contact" className="mt-7 w-full">
                  Schedule a Consultation
                </Button>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-soft text-center">
        <Container>
          <Reveal>
            <SectionHeading title="Explore Other Locations" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {locations
                .filter((l) => l.slug !== slug)
                .map((l) => (
                  <a
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:border-brand hover:text-brand"
                  >
                    {l.city}, {l.stateAbbr}
                  </a>
                ))}
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
