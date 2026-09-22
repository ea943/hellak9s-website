import type { Metadata } from "next";
import Link from "next/link";
import { Card, Container, IconBadge, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons/Icon";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactTopics, contactQuickActions, siteInfo } from "@/lib/data/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about training, programs, or becoming part of the HellaK9s team? Our team is here to help.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact HellaK9s"
        description="Questions about training, programs, or becoming part of the HellaK9s team? Our team is here to help."
        image={images.dogPathWalk}
      >
        <p className="font-display mt-4 text-lg font-bold text-brand">Say less. Train more.</p>
      </PageHero>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-white">Get In Touch</h2>
                <ul className="mt-8 space-y-8">
                  <li className="flex gap-4">
                    <IconBadge icon="phone" />
                    <div>
                      <p className="font-display font-bold text-white">Phone</p>
                      <a href={`tel:${siteInfo.contactPhone.replace(/\s/g, "")}`} className="text-lg font-bold text-brand hover:text-brand-light">
                        {siteInfo.contactPhone}
                      </a>
                      <p className="mt-1 text-sm text-white/50">Speak directly with a member of the HellaK9s team.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <IconBadge icon="mail" />
                    <div>
                      <p className="font-display font-bold text-white">Email</p>
                      <a href={`mailto:${siteInfo.email}`} className="text-lg font-bold text-white hover:text-brand">
                        {siteInfo.email}
                      </a>
                      <p className="mt-1 text-sm text-white/50">Send us a message and we&apos;ll respond as soon as possible.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <IconBadge icon="mapPin" />
                    <div>
                      <p className="font-display font-bold text-white">Headquarters</p>
                      <p className="text-lg font-bold text-white">{siteInfo.headquarters}</p>
                      <p className="mt-1 text-sm text-white/50">Serving clients across the United States through our training locations and programs.</p>
                    </div>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-10 rounded-2xl border border-white/10 bg-ink-card/60 p-7">
                  <h3 className="font-display font-bold text-white">What Are You Contacting Us About?</h3>
                  <ul className="mt-4 space-y-2.5">
                    {contactTopics.map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-sm text-white/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-3">
              <Reveal delay={80}>
                <h2 className="font-display mb-6 text-2xl font-bold text-white">Tell Us How We Can Help</h2>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-soft">
        <Container>
          <Reveal>
            <SectionHeading title="Quick Actions" description="Most visitors find what they need through one of these quick links:" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactQuickActions.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <Card className="h-full text-center">
                  <div className="flex justify-center">
                    <IconBadge icon={a.icon === "paw" ? "paw" : a.icon === "graduation" ? "graduation" : "briefcase"} size="lg" />
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{a.description}</p>
                  <Link href={a.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-light">
                    {a.cta} <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
