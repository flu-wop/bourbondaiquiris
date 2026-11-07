import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { PHOTOS } from "@/data/photos";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Seafood Saturday with DJ 3stackz, UNO tournament, the monthly birthday raffle, and karaoke from the Essence Fest 2026 champs.",
};

// UNVERIFIED: Seafood Saturday (and its times), DJ 3stackz, UNO tournament, monthly birthday raffle.
// Verified by photo: the Essence Fest 2026 karaoke trophy. Confirm every event detail with the owner before launch.
const NIGHTS = [
  { n: "01", cls: "", tag: "Sat · 3pm until it’s gone", title: "Seafood Saturday", body: "Shrimp, sausage, corn and potatoes. DJ 3stackz spins 4 to 7." },
  { n: "02", cls: "tk--pink", tag: "Essence Fest 2026 champs", title: "Karaoke", body: "Yes, we’re the reigning karaoke champions. Come take a swing at the mic." },
  { n: "03", cls: "tk--lime", tag: "Sign up in the shop", title: "UNO tournament", body: "Game night with prizes on the line. Spots fill fast." },
  { n: "04", cls: "tk--cyan", tag: "Monthly draw", title: "Birthday raffle", body: "Buy a 20 oz daiquiri for a shot at winning a full birthday party." },
];

export default function EventsPage() {
  return (
    <>
      <section className="phead nights">
        <div className="wrap">
          <p className="eyebrow">Every week</p>
          <h1>Pick your <span className="em">night</span></h1>
          <p className="lede">There&rsquo;s a ticket for each one. Check our Instagram for the latest dates and times.</p>
        </div>
      </section>

      <section className="sec nights" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tix" data-stagger>
            {NIGHTS.map((t) => (
              <div key={t.title} className={`tk ${t.cls}`}>
                <span className="tk__num" aria-hidden="true">{t.n}</span>
                <p className="tag">{t.tag}</p>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
          <div className="evpics">
            <Photo photo={PHOTOS.trophy} ratio="3 / 4" sizes="(min-width: 900px) 30vw, 90vw" position="50% 35%" />
            <div className="evpics__col">
              <Photo photo={PHOTOS.karaoke} ratio="16 / 10" sizes="(min-width: 900px) 55vw, 90vw" parallax={0.04} caption="Karaoke night in the shop" />
              <Photo photo={PHOTOS.love} ratio="16 / 10" sizes="(min-width: 900px) 55vw, 90vw" position="50% 30%" parallax={0.04} />
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {/* UNVERIFIED: catering / event booking offer and Google Form. */}
          <div className="call">
            <div>
              <p className="eyebrow">Host your own</p>
              <h2 data-reveal>Bring the <span className="em">party</span> to us, or us to you.</h2>
              <p className="lede">Birthdays, cookouts, collabs. Send us your date and we&rsquo;ll get back to you with pricing.</p>
              <p style={{ marginTop: 28 }}><a className="btn" href={SITE.cateringForm} target="_blank" rel="noopener">Request your event</a></p>
              <p className="fine" style={{ color: "rgba(255,255,255,.7)" }}>A request, not a commitment. Nothing is booked until we confirm.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
