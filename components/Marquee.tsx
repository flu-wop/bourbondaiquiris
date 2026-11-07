const WORDS = [
  "Frozen daiquiris",
  "Let’s make pour decisions",
  "Westbank nights",
  "Bourbon Bombs",
  "Essence Fest 2026 karaoke champs",
  "Daiquiri packs",
  "3637 General De Gaulle",
];

export default function Marquee() {
  const set = WORDS.map((w) => <span key={w}>{w}</span>);
  return (
    <div className="marquee-wrap" aria-label="Frozen daiquiris. Let's make pour decisions. Westbank nights.">
      <div className="marquee">
        <div className="marquee__track">
          <div className="marquee__set">{set}</div>
          <div className="marquee__set" aria-hidden="true">{set}</div>
        </div>
      </div>
    </div>
  );
}
