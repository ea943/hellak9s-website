import Image from "next/image";
import Link from "next/link";
import { Button, Card, Container, IconBadge, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons/Icon";
import { images } from "@/lib/images";
import { locations } from "@/lib/data/locations";
import { programs } from "@/lib/data/programs";
import { stats, philosophyPillars, differentiators, whoWeServe, testimonials } from "@/lib/data/content";

const programsPreview = programs.slice(0, 4);

const heroCards = [
  { icon: "shield" as const, title: "Professional Training", description: "Certified trainers with proven methodologies" },
  { icon: "target" as const, title: "Working & Protection Dogs", description: "Elite training for specialized roles" },
  { icon: "zap" as const, title: "Pet Obedience", description: "Transform your pet with structure and discipline" },
  { icon: "trending" as const, title: "Franchise Opportunities", description: "Join a proven system with brand authority" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src={images.shepherdCloseup}
          alt="Alert, confident German Shepherd trained by HellaK9s"
          fill
          priority
          className="object-cover object-[70%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

        <Container className="relative z-10">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-brand">HellaK9s Dog Training</p>
            <h1 className="font-display max-w-3xl text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl">
              Hellak9s Dog Training
            </h1>
            <p className="mt-6 font-display text-2xl font-semibold uppercase tracking-wide text-white/90 sm:text-3xl">
              Say less, train more.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/services">View Services</Button>
              <Button href="/locations" variant="outline" icon={null}>
                Find a Location
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Quick feature cards */}
      <Section className="!pt-16 !pb-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <Card className="h-full text-center">
                  <div className="flex justify-center">
                    <IconBadge icon={c.icon} size="lg" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{c.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Locations */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Nationwide"
              title="Find Your Nearest Location"
              description="Hellak9s training centers across the United States"
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.slice(0, 4).map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 80}>
                <Link href={`/locations/${loc.slug}`} className="group block h-full">
                  <Card className="h-full">
                    <Icon name="mapPin" className="h-7 w-7 text-brand" />
                    <h3 className="font-display mt-4 text-xl font-bold text-white">{loc.city}</h3>
                    <p className="mt-1 text-sm text-white/50">{loc.state}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      View Location
                      <Icon name="arrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
              <Button href="/locations">View All Locations</Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section className="bg-ink-soft">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our Approach" title="Hellak9s Philosophy" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-lg leading-relaxed text-white/65">
              <p>
                At Hellak9s, we believe dogs learn best through play, clarity, and purpose. Our training blends
                modern relationship-based methods with structure, accountability, and breed-appropriate routines.
              </p>
              <p>
                We don&apos;t correct behaviors in isolation — we train the intent behind them. Fear is met with
                confidence-building. Drive is channeled, not suppressed. Every dog is taught how to think, not just
                how to obey.
              </p>
              <p className="font-display text-2xl font-bold uppercase text-brand">Say less. Train more.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {philosophyPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Card className="h-full text-center">
                  <h3 className="font-display text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-brand">{p.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">{p.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <Container>
          <Reveal>
            <SectionHeading title="Trusted. Proven. Lived In." />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <Card className="h-full text-center">
                  <p className="font-display brand-gradient-text text-5xl font-bold">{s.value}</p>
                  <p className="font-display mt-3 text-lg font-semibold text-white">{s.label}</p>
                  <p className="mt-2 text-sm text-white/50">{s.sub}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Training programs */}
      <Section className="bg-ink-soft">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Programs"
              title="Our Training Programs"
              description="Training options built around your dog, your lifestyle, and real-world results."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {programsPreview.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Card className="h-full">
                  <h3 className="font-display text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-brand">{p.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">{p.description}</p>
                  <ul className="mt-5 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-white/60">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${p.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-light"
                  >
                    Learn More <Icon name="arrowRight" className="h-4 w-4" />
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
              <Button href="/services">View All Programs</Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Differentiators */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className={`rounded-2xl border-l-4 border-brand bg-gradient-to-r from-brand/10 to-transparent p-8`}>
                  <h3 className="font-display text-2xl font-bold text-white">{d.title}</h3>
                  <p className="mt-3 text-white/60">{d.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who we serve */}
      <Section className="bg-ink-soft">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Audiences" title="Who We Serve" description="Elite training solutions for diverse clients and needs" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {whoWeServe.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <Card className="h-full">
                  <div className="flex items-center gap-4">
                    <IconBadge icon={w.icon} />
                    <h3 className="font-display text-xl font-bold text-white">{w.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">{w.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {w.bullets.map((b) => (
                      <li key={b} className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/60">
                        {b}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Reviews" title="What Our Clients Say" description="Real results from real clients" />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <Card className="flex h-full flex-col">
                  <div className="flex gap-1 text-brand">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Icon key={idx} name="star" className="h-4 w-4" strokeWidth={0} style={{ fill: "currentColor" }} />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-white/70">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-display font-bold text-white">- {t.name}</p>
                    <p className="text-sm text-white/45">{t.role}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTAs */}
      <Section className="!py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <CtaPanel
            image={images.puppyAussie}
            icon="users"
            title="Become a Hellak9s Trainer"
            description="Join our elite team of professional dog trainers"
            cta="Apply Now"
            href="/apply"
          />
          <CtaPanel
            image={images.dogTrailHappy}
            icon="trending"
            title="Own a Hellak9s Franchise"
            description="Build your business with a proven training system"
            cta="Learn More"
            href="/franchise"
          />
        </div>
      </Section>
    </>
  );
}

function CtaPanel({
  image,
  icon,
  title,
  description,
  cta,
  href,
}: {
  image: string;
  icon: "users" | "trending";
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="relative flex min-h-[26rem] items-center justify-center overflow-hidden text-center">
      <Image src={image} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-brand/85 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-8">
        <div className="flex justify-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/70 text-white">
            <Icon name={icon} className="h-7 w-7" />
          </span>
        </div>
        <h3 className="font-display mt-6 text-3xl font-bold text-white">{title}</h3>
        <p className="mt-3 text-white/85">{description}</p>
        <Button href={href} variant="outline" className="mt-8 !border-white !text-white hover:!bg-white hover:!text-ink" icon={null}>
          {cta}
        </Button>
      </div>
    </div>
  );
}
