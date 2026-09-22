import type { Metadata } from "next";
import { Button, Card, Container, IconBadge, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FranchiseForm } from "@/components/forms/FranchiseForm";
import { franchiseBenefits, franchiseRequirements, franchiseAudience, franchiseProcess } from "@/lib/data/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Franchise Opportunities",
  description: "Build your own dog training business with the HellaK9s system. Franchise fee $20,000, minimum capital $50,000.",
};

export default function FranchisePage() {
  return (
    <>
      <PageHero
        eyebrow="Franchise"
        title="Franchise Opportunities"
        description="Build your own dog training business with the HellaK9s system. Join a growing network of trainers delivering modern, real-world dog training across the United States."
        image={images.businessHandshake}
      >
        <div className="mt-8 flex justify-center">
          <Button href="#request">Request Franchise Information</Button>
        </div>
      </PageHero>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Why HellaK9s" title="Franchise Benefits" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {franchiseBenefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <Card className="h-full text-center">
                  <div className="flex justify-center">
                    <IconBadge icon={b.icon} size="lg" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-white">{b.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{b.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-soft">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Investment"
              title="Franchise Investment"
              description="Launching a HellaK9s franchise requires a moderate startup investment compared to traditional franchise systems."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal>
              <Card highlight className="h-full">
                <h3 className="font-display text-lg font-bold text-white">Franchise Fee</h3>
                <p className="font-display brand-gradient-text mt-3 text-4xl font-bold">$20,000</p>
                <p className="mt-4 text-sm text-white/55">
                  One-time licensing fee granting the right to operate under the HellaK9s brand and training system.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-bold text-white">Minimum Available Capital</h3>
                <p className="font-display brand-gradient-text mt-3 text-4xl font-bold">$50,000</p>
                <p className="mt-4 text-sm text-white/55">Franchise partners must have at least $50,000 in available capital to cover startup expenses such as:</p>
                <ul className="mt-3 space-y-1.5">
                  {["equipment and training tools", "marketing and business launch", "insurance and operational setup", "working capital during early growth"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-white/50">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" /> {item}
                      </li>
                    )
                  )}
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={160}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-bold text-white">Estimated Startup Range</h3>
                <p className="font-display brand-gradient-text mt-3 text-4xl font-bold">$50,000 – $75,000</p>
                <p className="mt-4 text-sm text-white/55">
                  Compared to many dog training franchises requiring $150k+ startup investment, HellaK9s offers a more accessible path to building a professional training business.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Standards"
              title="Franchise Requirements"
              description="To ensure every HellaK9s location maintains the same training standards and client experience, franchise partners must meet the following requirements."
            />
          </Reveal>
          <div className="mt-14 space-y-6">
            {franchiseRequirements.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <Card highlight={i === 0}>
                  <div className="flex items-center gap-4">
                    <IconBadge icon={r.icon} />
                    <h3 className="font-display text-xl font-bold text-white">{r.title}</h3>
                  </div>
                  <p className="mt-4 text-white/60">{r.description}</p>
                  {r.subhead && <p className="mt-4 text-sm font-bold text-white">{r.subhead}</p>}
                  <ul className="mt-3 space-y-2">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-white/60">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" /> {b}
                      </li>
                    ))}
                  </ul>
                  {r.footer && <p className="mt-4 text-sm text-white/45">{r.footer}</p>}
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-soft">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Ideal Partners" title="Who We're Looking For" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {franchiseAudience.map((a, i) => (
              <Reveal key={a.text} delay={i * 80}>
                <Card className="h-full text-center">
                  <div className="flex justify-center">
                    <IconBadge icon={a.icon} size="lg" />
                  </div>
                  <p className="mt-4 text-white/70">{a.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-12 text-center text-xl font-bold text-white">
              No previous dog training business experience is required — we teach the system.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading title="How the Process Works" />
          </Reveal>
          <div className="mx-auto mt-14 max-w-2xl space-y-5">
            {franchiseProcess.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <Card highlight={p.step === franchiseProcess.length} className="flex items-center gap-5">
                  <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                    {p.step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                    <p className="text-sm text-white/55">{p.description}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="request" className="bg-ink-soft">
        <Container className="max-w-2xl">
          <Reveal>
            <SectionHeading
              eyebrow="Get Started"
              title="Request Franchise Information"
              description="Complete the form below and a member of our team will contact you to discuss franchise opportunities."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12">
              <FranchiseForm />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
