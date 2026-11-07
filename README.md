# Bourbon Daiquiris Wings & Things (demo)

Next.js 16 App Router, static-first, no backend. Lenis + GSAP ScrollTrigger, `next/font` (Anton, Manrope, Space Mono).
Routes: `/`, `/menu`, `/events`. Demo build: `noindex` until signed (layout metadata, `X-Robots-Tag` in `next.config.ts`).

- **Menu swap:** everything priced or listed lives in `data/menu.ts`. Real = the board; every `MOCK` comment is a placeholder price/item.
- **Photos:** `data/photos.ts` is the photo map (dimensions + alt text). No photo shows food or an event flyer.
- **Facts to confirm:** search the repo for `UNVERIFIED` (hours, Seafood Saturday, UNO, raffle, catering, hiring, follower count).
- **TODO:** Linktree URL (`data/site.ts`, footer link appears once set).
- **Cart:** client-only (`lib/cart-store.ts`, localStorage), one provider in the root layout. Checkout hands off to the Uber Eats search URL.

`npm run dev` / `npm run build` / `npm run lint`
