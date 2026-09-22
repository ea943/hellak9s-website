export type Program = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: "home" | "moon" | "sun" | "users" | "sprout";
};

export const programs: Program[] = [
  {
    slug: "private-lessons",
    title: "Private Lessons",
    tagline: "One-on-one training, fully customized",
    description:
      "Personalized sessions focused on obedience, behavior, confidence, and engagement. Available in-facility or in-home, depending on your goals.",
    bullets: [
      "Intent-based behavior training",
      "Owner coaching included",
      "Real-world application",
    ],
    icon: "home",
  },
  {
    slug: "board-and-train",
    title: "Board & Train",
    tagline: "Immersive training with structure and purpose",
    description:
      "Your dog stays with our trainers and receives daily structured training, play-based learning, and accountability — followed by owner transition sessions.",
    bullets: [
      "Structured routines",
      "Confidence-building through engagement",
      "Real-life exposure",
    ],
    icon: "moon",
  },
  {
    slug: "day-train",
    title: "Day Train",
    tagline: "Professional training, without the overnight stay",
    description:
      "Drop your dog off for focused training days designed to build obedience, confidence, and clarity — perfect for busy owners.",
    bullets: ["Consistent training reps", "Play-based learning", "Measurable progress"],
    icon: "sun",
  },
  {
    slug: "group-classes",
    title: "Group Classes",
    tagline: "Structured learning with real distractions",
    description:
      "Progressive group classes for both pet dogs and working dogs, from beginner to advanced levels.",
    bullets: [
      "Pet group classes (Beginner → Advanced)",
      "Working dog group classes (Beginner → Advanced)",
      "Engagement, neutrality, and control",
    ],
    icon: "users",
  },
  {
    slug: "raise-and-train",
    title: "Raise & Train",
    tagline: "Start it right from day one",
    description:
      "A structured foundation program for puppies and young dogs, focusing on confidence, engagement, and breed-appropriate development.",
    bullets: ["Play-based foundations", "Clear structure and routines", "Long-term success focus"],
    icon: "sprout",
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
