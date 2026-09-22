import type { Metadata } from "next";
import Image from "next/image";
import { Button, Card, Container, IconBadge, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { aboutWhoWeTrain, trainingPhilosophyPrinciples } from "@/lib/data/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: "HellaK9s exists to develop confident, reliable dogs while teaching owners how to communicate clearly with them.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our Mission" title="Our Mission" description="Build Better Dogs. Build Better Handlers." image={images.shepherdCloseup} />


      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <div className="space-y-5 text-center text-lg leading-relaxed text-white/65">
              <p>
                HellaK9s exists to develop confident, reliable dogs while teaching owners how to communicate clearly
                with them.
              </p>
              <p>
                Our training is built on structure, engagement, and real-world application. We combine modern
                relationship-based training with clear expectations so dogs understand what is being asked of them
                and how to succeed.
              </p>
              <p>We don&apos;t believe in temporary fixes or quick tricks.</p>
              <p>
                We focus on building dogs that can think, adapt, and remain reliable in the environments where they
                actually live and work.
              </p>
              <p className="font-display text-2xl font-bold text-brand">Say less. Train more.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-14 rounded-2xl border border-brand/40 bg-brand/5 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">More Than Dog Training</h2>
              <p className="mt-4 text-white/65">
                At HellaK9s, we believe training should create a partnership between the dog and the handler.
              </p>
              <p className="mt-4 text-white/65">
                Our programs are designed to build communication, confidence, and trust so dogs and owners can
                function together in real-world environments — not just in controlled training settings.
              </p>
              <p className="mt-4 text-white/65">
                Whether we are working with family companions, competitive sport dogs, or professional working dogs,
                our goal is the same:
              </p>
              <p className="mt-4 text-lg font-bold text-white">
                Create dogs that are <span className="text-brand">clear-headed, responsive, and reliable under pressure.</span>
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="!py-0">
        <div className="relative h-[420px] w-full overflow-hidden">
          <Image src={images.dogPathWalk} alt="HellaK9s trainer working with a dog" fill className="object-cover" />
        </div>
      </Section>

      <Section className="bg-ink-soft">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Audiences" title="Who We Train" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {aboutWhoWeTrain.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <Card className="h-full">
                  <IconBadge icon={w.icon} />
                  <h3 className="font-display mt-4 text-xl font-bold text-white">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{w.description}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{w.detail}</p>
                  {w.note && <p className="mt-3 text-sm italic text-white/40">{w.note}</p>}
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Foundations"
              title="Our Training Philosophy"
              description="Every dog trained at HellaK9s is developed using three core principles."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {trainingPhilosophyPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <Card className="h-full text-center">
                  <div className="flex justify-center">
                    <IconBadge icon={p.icon} size="lg" />
                  </div>
                  <h3 className="font-display mt-5 text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-white/55">{p.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-soft text-center">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading title="The HellaK9s Standard" />
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-white/65">
              <p>Our mission is not simply to train dogs.</p>
              <p>
                Our mission is to raise the standard for what dog training should produce — dogs that are confident,
                responsive, and capable of functioning reliably in real-world environments.
              </p>
              <p className="text-xl font-bold text-white">
                Because when training is done correctly, the results last for the life of the dog.
              </p>
            </div>
            <div className="mt-9 flex justify-center">
              <Button href="/contact">Start Training Today</Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
