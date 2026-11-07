import Image from "next/image";
import Cup from "@/components/Cup";
import HeroGlow from "@/components/HeroGlow";
import Marquee from "@/components/Marquee";
import OpenPill from "@/components/OpenPill";
import Photo from "@/components/Photo";
import { TLink } from "@/components/PageTransition";
import { BOARD } from "@/data/menu";
import { PHOTOS } from "@/data/photos";
import { HOURS, SITE } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero__bg" />
        <div className="hero__photo">
          <Image data-hero-photo src={PHOTOS.hero.src} width={PHOTOS.hero.w} height={PHOTOS.hero.h} alt={PHOTOS.hero.alt} priority quality={72} sizes="(min-width: 900px) 45vw, 135vw" />
        </div>
        <HeroGlow />
        <div className="wrap hero__in">
          <OpenPill />
          <h1><span>Bourbon</span><span className="em">Daiquiris</span></h1>
          <p className="hero__tag">Let&rsquo;s make <b>POUR</b> decisions</p>
          <div className="hero__cta">
            <a className="btn" href={SITE.uberEats} target="_blank" rel="noopener">Order on Uber Eats</a>
            <TLink className="btn btn--line" href="/menu">See the menu</TLink>
          </div>
          <p className="hero__note">Opens an Uber Eats search &middot; Wings &amp; Things &middot; 3637 General De Gaulle Dr</p>
        </div>
      </section>

      <Marquee />

      {/* MENU TEASER: pinned, staged reveal with a scroll-linked cup */}
      <section className="stage" data-stage aria-label="The board">
        <div className="wrap stage__grid">
          <div className="stage__cup" data-stage-cup>
            <Cup id="stage" solid colors={["#d63ccf"]} level={0.35} label="A cup that fills as you scroll through the board" />
          </div>
          <div>
            <div className="stage__head">
              <p className="eyebrow">The board</p>
              <h2>Eight originals. <span className="em">Seventeen</span> ways to mix them.</h2>
            </div>
            <div className="stage__panels">
              <div className="stage__panel" data-stage-item data-color="#d63ccf" data-level="0.35">
                <h3>Originals</h3>
                <ul>{BOARD.originals.slice(0, 8).map((o) => <li key={o.name}>{o.name}</li>)}</ul>
              </div>
              <div className="stage__panel" data-stage-item data-color="#21a8f0" data-level="0.65">
                <h3>Combos</h3>
                <ul>{BOARD.combos.slice(0, 8).map((o) => <li key={o.name}>{o.name}<small>{o.note}</small></li>)}</ul>
                <p>Plus nine more on the board.</p>
              </div>
              <div className="stage__panel" data-stage-item data-color="#e7c36a" data-level="0.95">
                <h3>Premium</h3>
                <ul>{BOARD.premium.map((o) => <li key={o.name}>{o.name}<small>{o.note}</small></li>)}</ul>
                <p>And a house shot that comes with a well shot. Build your own cup on the menu page.</p>
                <p style={{ marginTop: 20 }}><TLink className="btn btn--purple" href="/menu">Build your cup</TLink></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SHOP: photo-led editorial grid */}
      <section className="sec shop" id="shop">
        <div className="wrap">
          <div className="shop__head">
            <div>
              <p className="eyebrow">The shop</p>
              <h2 data-reveal>Purple doors. Real seats. <span className="em">Cold</span> cups.</h2>
            </div>
            <p className="lede" data-reveal>
              A brick shop on the Westbank with indoor seating, neon on the walls and every machine in view. Walk in, pick a flavor, stay a while.
            </p>
          </div>
          <div className="shop__grid">
            <div className="g-a"><Photo photo={PHOTOS.storefront} ratio="4 / 5" sizes="(min-width: 900px) 33vw, 50vw" caption="Westbank" /></div>
            <div className="g-b"><Photo photo={PHOTOS.karaoke} ratio="4 / 3" sizes="(min-width: 900px) 33vw, 50vw" parallax={0.04} /></div>
            <div className="g-c"><Photo photo={PHOTOS.swing} ratio="3 / 4" sizes="(min-width: 900px) 33vw, 50vw" /></div>
            <div className="g-d"><Photo photo={PHOTOS.gummy} ratio="1 / 1" sizes="(min-width: 900px) 33vw, 50vw" parallax={0.04} /></div>
          </div>
        </div>
      </section>

      {/* EVENTS TEASER */}
      <section className="sec nights">
        <div className="wrap">
          <p className="eyebrow">Events</p>
          <h2 data-reveal>It&rsquo;s never a quiet <span className="em">week</span>.</h2>
          <div className="split">
            <div className="tix tix--compact" data-stagger>
              {/* UNVERIFIED: Seafood Saturday, DJ 3stackz, UNO tournament, birthday raffle. Confirm details with the owner. */}
              <div className="tk"><p className="tag">Saturdays</p><h3>Seafood Saturday</h3><p>DJ 3stackz on the decks.</p></div>
              <div className="tk tk--pink"><p className="tag">Essence Fest 2026</p><h3>Karaoke champs</h3><p>Reigning, and ready to hand you the mic.</p></div>
              <div className="tk tk--lime"><p className="tag">Game night</p><h3>UNO tournament</h3><p>Sign up in the shop.</p></div>
              <div className="tk tk--cyan"><p className="tag">Monthly draw</p><h3>Birthday raffle</h3><p>Win a full birthday party.</p></div>
            </div>
            <Photo photo={PHOTOS.trophy} ratio="3 / 4" sizes="(min-width: 900px) 30vw, 90vw" position="50% 35%" />
          </div>
          <p style={{ marginTop: 32 }}><TLink className="btn btn--gold" href="/events">All the events</TLink></p>
        </div>
      </section>

      {/* CATERING / BOOKING */}
      <section className="sec" style={{ paddingBlock: "clamp(24px,5vw,56px)" }}>
        <div className="wrap">
          {/* UNVERIFIED: catering / event booking offer and the Google Form link. */}
          <div className="call call--split">
            <div>
              <p className="eyebrow">Catering &amp; booking</p>
              <h2 data-reveal>Your party, our <span className="em">machines</span>.</h2>
              <p className="lede">Birthdays, cookouts, collabs. Send us your date and we&rsquo;ll get back to you with pricing.</p>
              <p style={{ marginTop: 28 }}><a className="btn" href={SITE.cateringForm} target="_blank" rel="noopener">Request your event</a></p>
              <p className="fine" style={{ color: "rgba(255,255,255,.7)" }}>A request, not a commitment. Nothing is booked until we confirm.</p>
            </div>
            <div className="call__photos">
              <Photo photo={PHOTOS.pack} ratio="3 / 4" sizes="(min-width: 900px) 20vw, 45vw" parallax={0.03} />
              <Photo photo={PHOTOS.bombs} ratio="3 / 4" sizes="(min-width: 900px) 20vw, 45vw" parallax={0.03} />
            </div>
          </div>
          {/* UNVERIFIED: hiring. */}
          <div className="hire">
            <div>
              <h3>We&rsquo;re hiring</h3>
              <p>Good energy, quick hands, and you don&rsquo;t mind a Saturday rush. Message us on Instagram.</p>
            </div>
            <a className="btn" href={SITE.instagram} target="_blank" rel="noopener">Message us</a>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="sec visit" id="visit">
        <div className="wrap visit__grid">
          <div>
            <p className="eyebrow">Visit</p>
            <h2 data-reveal>Find us on the <span className="em">Westbank</span>.</h2>
            <address>{SITE.address[0]}<br />{SITE.address[1]}</address>
            {/* UNVERIFIED: hours. */}
            <ul className="hours">
              {HOURS.map((h) => <li key={h.label}><span>{h.label}</span><span>{h.text}</span></li>)}
            </ul>
            <div className="btn-row">
              <a className="btn btn--gold" href={SITE.mapsLink} target="_blank" rel="noopener">Get directions</a>
              <a className="btn btn--line" href={SITE.instagram} target="_blank" rel="noopener">Instagram</a>
            </div>
          </div>
          <Photo photo={PHOTOS.love} ratio="4 / 5" sizes="(min-width: 900px) 40vw, 90vw" />
        </div>
      </section>
    </>
  );
}
