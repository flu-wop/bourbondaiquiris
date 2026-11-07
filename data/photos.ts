/**
 * Photo map: the single source for image paths, real pixel dimensions and alt text.
 * No photo shows wings, fries, a seafood boil or an event flyer. Never imply otherwise.
 */
export type Photo = { src: string; w: number; h: number; alt: string };

export const PHOTOS = {
  hero: {
    // Cropped to the left 830px of the original: the right edge of the source has a baked-in logo overlay.
    src: "/img/hero-bottles.jpg",
    w: 830,
    h: 960,
    alt: "Two frozen daiquiris served in tequila bottles, one red and one blue, with salt-rimmed shot glasses in front of the daiquiri machines",
  },
  storefront: {
    src: "/img/storefront.jpg",
    w: 1000,
    h: 1287,
    alt: "Three friends posing under the porch of the brick shop at night, lit purple and green below the Bourbon Daiquiris sign",
  },
  swing: {
    src: "/img/neon-swing.jpg",
    w: 900,
    h: 1200,
    alt: "A guest holding a cup in a hanging chair under the neon Bourbon Daiquiris sign",
  },
  love: {
    src: "/img/neon-love.jpg",
    w: 900,
    h: 1199,
    alt: "Two friends clasping hands at a high-top table under a neon sign reading Say love, start drinking",
  },
  karaoke: {
    src: "/img/karaoke.jpg",
    w: 1179,
    h: 651,
    alt: "Two women singing karaoke inside the shop while a man films, with a Happy Birthday banner and a glowing jukebox behind them",
  },
  trophy: {
    src: "/img/trophy.jpg",
    w: 1200,
    h: 1600,
    alt: "Gold microphone trophy engraved Essence Fest 2026 Karaoke Champions, in front of a neon Let the good times pour sign",
  },
  pack: {
    src: "/img/pack.jpg",
    w: 1000,
    h: 1333,
    alt: "Two branded foam cups, a jug of yellow liquid and stacks of blue, red and yellow jello shots in front of the daiquiri machines",
  },
  bombs: {
    src: "/img/bombs.jpg",
    w: 1080,
    h: 1350,
    alt: "Two frosted tequila bottles with red, orange, blue and green jello shots in front, under the words Bourbon Bombs",
  },
  gummy: {
    src: "/img/gummy-shots.jpg",
    w: 1024,
    h: 1024,
    alt: "Four clear cups of jello shots in orange, blue and red, one topped with gummy bears",
  },
  uber: {
    src: "/img/uber.jpg",
    w: 1000,
    h: 1008,
    alt: "Promo graphic reading We are now on Uber Eats, with three frozen daiquiris in branded glasses: pink, green and white",
  },
  logo: {
    src: "/img/logo.jpg",
    w: 945,
    h: 365,
    alt: "Bourbon Daiquiris Wings and Things logo: a Mardi Gras mask with feathers beside green and gold lettering on purple",
  },
} satisfies Record<string, Photo>;
