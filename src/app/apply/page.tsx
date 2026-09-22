import type { Metadata } from "next";
import { Card, Container, IconBadge, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons/Icon";
import { TrainerApplyForm } from "@/components/forms/TrainerApplyForm";
import {
  trainerBenefits,
  trainerStandards,
  trainerDevelopmentAreas,
  trainerWorkWith,
  trainerApplicationProcess,
} from "@/lib/data/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Apply as a Trainer",
  description: "Join the HellaK9s team. Build a career as a professional dog trainer — no previous certification required.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Join the HellaK9s Team" description="Build a career as a professional dog trainer." image={images.dogTrailHappy}>
        <p className="mx-auto mt-6 max-w-2xl text-white/65">
          Whether you&apos;re an experienced trainer or just beginning your journey with dogs, HellaK9s provides the
          training, mentorship, and real-world experience needed to develop elite trainers.
        </p>
        <p className="font-display mt-4 text-xl font-bold text-brand">We don&apos;t just hire trainers — we build them.</p>
      </PageHero>

      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Why HellaK9s"
              title="Why Trainers Join HellaK9s"
              description="HellaK9s is designed for people who are passionate about dogs and serious about learning the craft of professional dog training."
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-center text-white/60">
              Our trainers work with a wide range of dogs and clients — from family companions to high-drive working
              breeds — using modern relationship-based training built on structure, clarity, and engagement.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-12 rounded-2xl border border-brand/40 bg-brand/5 p-8">
              <h3 className="font-display text-xl font-bold text-white">As part of the HellaK9s team, you&apos;ll gain:</h3>
              <ul className="mt-5 space-y-3">
                {trainerBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/70">
                    <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 text-center italic text-white/45">
              Many of our trainers began with nothing more than a passion for dogs and a willingness to learn.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-ink-soft">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              title="Our Standards"
              description="While prior professional experience is not required, we hold our trainers to a high standard of professionalism and commitment."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 rounded-2xl border border-white/10 bg-ink-card/60 p-8">
              <h3 className="font-display text-lg font-bold text-white">HellaK9s trainers must demonstrate:</h3>
              <ul className="mt-5 space-y-3">
                {trainerStandards.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-white/70">
                    <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center italic text-white/45">
                We believe great trainers are built through experience, mentorship, and dedication to the craft.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Growth" title="Trainer Development" description="HellaK9s invests heavily in developing our trainers." />
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-white/60">
              New trainers work directly alongside experienced team members, gaining hands-on experience in:
            </p>
          </Reveal>
          <div className="mx-auto mt-10 max-w-2xl space-y-4">
            {trainerDevelopmentAreas.map((a, i) => (
              <Reveal key={a} delay={i * 60}>
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-ink-card/60 px-6 py-4">
                  <IconBadge icon="target" size="sm" />
                  <span className="text-white/75">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-white/55">
              Through this process, trainers develop the skills necessary to work with a wide range of dogs and
              training challenges.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-ink-soft">
        <Container>
          <Reveal>
            <SectionHeading title="Who You'll Work With" description="HellaK9s trainers regularly work with:" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainerWorkWith.map((w, i) => (
              <Reveal key={w.text} delay={i * 70}>
                <Card className="h-full text-center">
                  <div className="flex justify-center">
                    <IconBadge icon={w.icon} size="lg" />
                  </div>
                  <p className="mt-4 text-white/70">{w.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={250}>
            <p className="mt-12 text-center text-xl font-bold text-white">
              Every day presents new opportunities to learn and develop as a trainer.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading title="Application Process" />
          </Reveal>
          <div className="mx-auto mt-14 max-w-2xl space-y-5">
            {trainerApplicationProcess.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <Card highlight={p.step === trainerApplicationProcess.length} className="flex items-center gap-5">
                  <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                    {p.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="apply" className="bg-ink-soft">
        <Container className="max-w-2xl">
          <Reveal>
            <SectionHeading
              eyebrow="Take The Next Step"
              title="Apply to Join HellaK9s"
              description="If you're passionate about dogs and motivated to build real skills as a trainer, we encourage you to apply. Tell us about your experience, your goals, and why you'd like to join the HellaK9s team."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12">
              <TrainerApplyForm />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
