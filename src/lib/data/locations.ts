export type Location = {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  phone: string;
  email: string;
  services: string[];
  hours: string;
};

export const locations: Location[] = [
  {
    slug: "new-braunfels",
    city: "New Braunfels",
    state: "Texas",
    stateAbbr: "TX",
    phone: "(830) 310-6068",
    email: "Nbtx@hellak9s.com",
    services: ["Private Lessons", "Board and Train", "Day Train", "Group Classes", "Raise and Train"],
    hours: "By Appointment Only",
  },
  {
    slug: "virginia-beach",
    city: "Virginia Beach",
    state: "Virginia",
    stateAbbr: "VA",
    phone: "+1 757-290-6672",
    email: "vb@hellak9s.com",
    services: ["Private Lessons", "Board and Train", "Raise and Train"],
    hours: "By Appointment Only",
  },
  {
    slug: "colorado-springs",
    city: "Colorado Springs",
    state: "Colorado",
    stateAbbr: "CO",
    phone: "+1 719-416-4087",
    email: "colorado@hellak9s.com",
    services: ["Private Lessons", "Board and Train", "Group Classes"],
    hours: "By Appointment Only",
  },
  {
    slug: "orlando",
    city: "Orlando",
    state: "Florida",
    stateAbbr: "FL",
    phone: "(830) 402-4297",
    email: "vb@hellak9s.com",
    services: ["Private Lessons", "Board and Train", "Raise and Train"],
    hours: "By Appointment Only",
  },
  {
    slug: "wisconsin",
    city: "Wisconsin",
    state: "Wisconsin",
    stateAbbr: "WI",
    phone: "+1 810-922-5108",
    email: "info@hellak9s.com",
    services: ["Private Lessons", "Board and Train", "Day Train", "Group Classes", "Raise and Train"],
    hours: "By Appointment Only",
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
