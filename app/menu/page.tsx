import type { Metadata } from "next";
import CupBuilder from "@/components/CupBuilder";
import FoodTiles from "@/components/FoodTiles";
import Photo from "@/components/Photo";
import { BOARD } from "@/data/menu";
import { PHOTOS } from "@/data/photos";
import { SITE } from "@/data/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menu",
  description: "The full daiquiri board: originals, combos, specialty and premium pours, plus a cup builder. Frozen daiquiris on the Westbank.",
};

export default function MenuPage() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <p className="eyebrow" style={{ ["--acc" as string]: "var(--pink)" }}>The board</p>
          <h1>The <span className="em" style={{ ["--acc" as string]: "var(--pink)" }}>menu</span></h1>
          <p className="lede">Straight off the board in the shop: originals, combos, specialty and premium pours. Build a cup, add a bite, then head to Uber Eats.</p>
        </div>
      </section>

      {/* CUP BUILDER (real board combos) */}
      <section className="sec mix" id="builder">
        <CupBuilder />
      </section>

      {/* THE BOARD (real content, from the shop's own board) */}
      <section className="sec board" id="board">
        <div className="wrap">
          <p className="eyebrow">The full board</p>
          <h2 data-reveal>Eight originals. Seventeen ways to <span className="em">mix</span> them.</h2>
          <div className="board__grid">
            <div>
              <section>
                <h3>Original flavors</h3>
                <ul className="board__two">
                  {BOARD.originals.map((o, i) => (
                    <li key={o.name} className={i === BOARD.originals.length - 1 ? "wide" : undefined}>{o.name}{o.note && <span>{o.note}</span>}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h3>Specialty DAQ</h3>
                <ul className="board__two">{BOARD.specialty.map((o) => <li key={o.name}>{o.name}<span>{o.note}</span></li>)}</ul>
              </section>
              <section>
                <h3>Premium DAQ</h3>
                <ul className="board__two">{BOARD.premium.map((o) => <li key={o.name}>{o.name}<span>{o.note}</span></li>)}</ul>
              </section>
            </div>
            <div>
              <section>
                <h3>Daiquiri combos</h3>
                <ul>{BOARD.combos.map((o) => <li key={o.name}>{o.name}<span>{o.note}</span></li>)}</ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* MOCK FOOD: typographic tiles only */}
      <section className="sec food" id="food">
        <div className="wrap">
          <p className="eyebrow">Something hot for the cold cup</p>
          <h2 data-reveal>Bites to go <span className="em">with</span> it.</h2>
          <p className="lede">Add food to the same order. Demo items and placeholder prices, to show how ordering will work.</p>
          <FoodTiles />
          <p className="fine">Demo menu, prices placeholder. Nothing is charged on this page.</p>
        </div>
      </section>

      {/* TAKE-HOME */}
      <section className="sec togo">
        <div className="wrap">
          <p className="eyebrow">To go</p>
          <h2 data-reveal>Take the night <span className="em">home</span>.</h2>
          <p className="lede">Shots, packs for the table, or the whole thing delivered.</p>
          <div className="togo__grid" data-stagger>
            <figure>
              <Photo photo={PHOTOS.bombs} ratio="4 / 5" sizes="(min-width: 900px) 25vw, 50vw" parallax={0.03} />
              <h3>Bourbon Bombs</h3>
              <p>Shots in every color, made to go with the cup.</p>
            </figure>
            <figure>
              <Photo photo={PHOTOS.gummy} ratio="4 / 5" sizes="(min-width: 900px) 25vw, 50vw" parallax={0.03} />
              <h3>Jello shots</h3>
              <p>Gummies on top.</p>
            </figure>
            <figure>
              <Photo photo={PHOTOS.pack} ratio="4 / 5" sizes="(min-width: 900px) 25vw, 50vw" parallax={0.03} />
              <h3>Daiquiri packs</h3>
              <p>Cups and shots for the whole table. Ask what&rsquo;s in this week&rsquo;s.</p>
            </figure>
            <figure>
              <a href={SITE.uberEats} target="_blank" rel="noopener">
                <div className="ph ph--flat" style={{ aspectRatio: "4 / 5" }}>
                  <div className="ph__in">
                    <Image className="ph__img" src={PHOTOS.uber.src} width={PHOTOS.uber.w} height={PHOTOS.uber.h} alt={PHOTOS.uber.alt} sizes="(min-width: 900px) 25vw, 50vw" quality={72} />
                  </div>
                </div>
                <h3>Delivered</h3>
                <p>We&rsquo;re on Uber Eats. Opens a search in a new tab.</p>
              </a>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
