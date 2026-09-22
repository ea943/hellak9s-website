import type { Metadata } from "next";
import { Button, Card, Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons/Icon";
import { StateOutline } from "@/components/StateOutline";
import { locations } from "@/lib/data/locations";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Locations",
  description: "Find a HellaK9s training facility near you — New Braunfels TX, Virginia Beach VA, Colorado Springs CO, Orlando FL, and Wisconsin.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Nationwide" title="Our Locations" description="Find a HellaK9s training facility near you" image={images.dogTrailHappy} />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 60}>
                <Card className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <StateOutline abbr={loc.stateAbbr} className="h-28 w-auto text-white/15" />
                  </div>
                  <h2 className="font-display mt-2 text-2xl font-bold text-white">
                    HellaK9s {loc.city}
                  </h2>
                  <div className="mt-3 space-y-1.5 text-sm text-white/60">
                    <a href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-2 hover:text-brand">
                      <Icon name="phone" className="h-4 w-4" /> {loc.phone}
                    </a>
                    <a href={`mailto:${loc.email}`} className="flex items-center gap-2 hover:text-brand">
                      <Icon name="mail" className="h-4 w-4" /> {loc.email}
                    </a>
                  </div>
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">Services Available:</p>
                    <ul className="mt-2 space-y-1.5">
                      {loc.services.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-white/65">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button href={`/locations/${loc.slug}`} className="mt-6 w-full">
                    View Location Details
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-soft text-center">
        <Container>
          <Reveal>
            <SectionHeading title="Can't Find a Location Near You?" description="Interested in bringing HellaK9s to your area? Learn about our franchise opportunities." />
            <div className="mt-8 flex justify-center">
              <Button href="/franchise">Explore Franchise Options</Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
