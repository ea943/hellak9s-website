// Stock photography (Unsplash) standing in for HellaK9s' own brand photography.
// Every URL below has been visually verified to match its label.
// Swap these for real location/team photos whenever they're available.
function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const images = {
  // Original HellaK9s hero photo (woman + German Shepherd), from the Figma design.
  heroSection: "/images/hero-section.webp",
  // Serious, alert German Shepherd close-up — the "elite training" hero image.
  shepherdCloseup: unsplash("photo-1589941013453-ec89f33b5e95", 1920),
  // Golden retriever puppy with a collar, outdoors.
  puppyGolden: unsplash("photo-1591160690555-5debfba289f0"),
  // Golden retriever puppy holding a tulip.
  puppyTulip: unsplash("photo-1552053831-71594a27632d"),
  // Studio portrait, Labrador puppy in a bandana.
  puppyBowtie: unsplash("photo-1587764379873-97837921fd44"),
  // Happy dog with tongue out on an outdoor trail.
  dogTrailHappy: unsplash("photo-1544568100-847a948585b9"),
  // Australian Shepherd puppy lying on a path outdoors.
  puppyAussie: unsplash("photo-1601979031925-424e53b6caaa"),
  // Candid dog on an outdoor path/walk.
  dogPathWalk: unsplash("photo-1518717758536-85ae29035b6d"),
  // Two people shaking hands in an office.
  businessHandshake: unsplash("photo-1521791136064-7986c2920216"),
  // Two colleagues high-fiving at a desk.
  businessHighFive: unsplash("photo-1600880292203-757bb62b4baf"),
  // Signing a document/contract.
  contractSigning: unsplash("photo-1450101499163-c8848c66ca85"),
};
