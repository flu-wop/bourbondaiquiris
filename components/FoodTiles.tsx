import { FOOD, type FoodItem } from "@/data/menu";
import { money } from "@/lib/format";
import AddButton from "./AddButton";

// Simple glyphs only. Typographic tiles, no food photography (hard rule).
const GLYPH: Record<FoodItem["glyph"], React.ReactNode> = {
  wings: (<><path d="M14 40c-4-10 2-22 14-24 10-2 22 4 22 16 0 8-6 14-16 14-6 0-10-2-12-4" /><path d="M10 44l-4 6M16 47l-3 7" /><path d="M26 28c4-2 10 0 12 4" /></>),
  mozz: (<><rect x="10" y="26" width="30" height="10" rx="5" transform="rotate(-24 25 31)" /><rect x="24" y="32" width="30" height="10" rx="5" transform="rotate(-24 39 37)" /></>),
  fries: (<><path d="M16 26h32l-4 28H20z" /><path d="M22 26l-2-12M30 26l-1-14M38 26l2-14M46 26l3-10" /></>),
  tots: (<><rect x="12" y="30" width="16" height="12" rx="6" /><rect x="30" y="22" width="16" height="12" rx="6" /><rect x="26" y="40" width="16" height="12" rx="6" /><rect x="42" y="38" width="12" height="10" rx="5" /></>),
  tenders: (<><rect x="10" y="30" width="34" height="12" rx="6" transform="rotate(-30 27 36)" /><rect x="22" y="38" width="34" height="12" rx="6" transform="rotate(-30 39 44)" /></>),
};

export default function FoodTiles() {
  return (
    <div className="food__grid" data-stagger>
      {FOOD.map((f) => (
        <article key={f.id} className={`tile tile--${f.accent}`}>
          <svg viewBox="0 0 64 64" aria-hidden="true">{GLYPH[f.glyph]}</svg>
          <div>
            <h3>{f.name}</h3>
            <p>{f.detail}</p>
          </div>
          <div className="tile__foot">
            <span className="mono">{money(f.price)}</span>
            <AddButton item={{ key: `food-${f.id}`, name: f.name, detail: f.detail, price: f.price }} />
          </div>
        </article>
      ))}
    </div>
  );
}
