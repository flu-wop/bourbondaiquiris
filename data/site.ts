export const SITE = {
  name: "Bourbon Daiquiris Wings & Things",
  short: "Bourbon Daiquiris",
  tagline: "Let's make POUR decisions",
  address: ["3637 General De Gaulle Drive", "Westbank, New Orleans, LA 70114"],
  // Uber Eats stays on the search URL. Do not imply a menu exists there.
  uberEats: "https://www.ubereats.com/search?q=Bourbon%20Daiquiris%20Wings%20and%20Things",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Bourbon+Daiquiris+Wings+and+Things+3637+General+De+Gaulle",
  instagram: "https://www.instagram.com/bourbondaiquiris_nola/",
  // UNVERIFIED: follower count is approximate (~5,200). Confirm before launch.
  instagramFollowers: "5,200+",
  facebook: "https://www.facebook.com/Bourbon-Daiquiri-Wings-and-Things-61569027869176/",
  // TODO: Linktree URL not found in any source. Footer link renders only when this is set.
  linktree: "",
  // UNVERIFIED: catering / booking request form (existing Google Form from the original site).
  cateringForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSe2XDILpDDTI6h9aDiAUACLpvGGyXctw7nS4G2AeakjhvVTjw/viewform?usp=preview",
  timeZone: "America/Chicago",
} as const;

/**
 * UNVERIFIED: hours Mon-Thu 12-10, Fri 12-11, Sat 11-11, Sun 11-10.
 * Index 0 = Sunday. Times are 24h [open, close].
 */
export const HOURS: { label: string; days: number[]; text: string }[] = [
  { label: "Monday to Thursday", days: [1, 2, 3, 4], text: "12pm to 10pm" },
  { label: "Friday", days: [5], text: "12pm to 11pm" },
  { label: "Saturday", days: [6], text: "11am to 11pm" },
  { label: "Sunday", days: [0], text: "11am to 10pm" },
];

export const HOURS_BY_DAY: Record<number, [number, number]> = {
  0: [11, 22],
  1: [12, 22],
  2: [12, 22],
  3: [12, 22],
  4: [12, 22],
  5: [12, 23],
  6: [11, 23],
};
