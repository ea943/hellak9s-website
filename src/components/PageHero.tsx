import Image from "next/image";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <Container className="relative z-10 text-center">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-brand">{eyebrow}</p>
          <h1 className="font-display mx-auto max-w-3xl text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">{description}</p>}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
