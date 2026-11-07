"use client";

import { useState } from "react";
import { COMBOS, CUP_SIZES, FLAVORS, FLAVOR_GROUPS, MAX_FLAVORS, PREMIUM_UPCHARGE, type Combo } from "@/data/menu";
import { money } from "@/lib/format";
import AddButton from "./AddButton";
import Cup from "./Cup";

const BY_ID = Object.fromEntries(FLAVORS.map((f) => [f.id, f]));
const keyOf = (ids: string[]) => [...ids].sort().join("|");
const COMBO_BY_KEY = new Map<string, Combo>(COMBOS.map((c) => [keyOf(c.parts), c]));

export default function CupBuilder() {
  const [sel, setSel] = useState<string[]>([]);
  const [size, setSize] = useState<(typeof CUP_SIZES)[number]["id"]>("d20");

  const toggle = (id: string) =>
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id].slice(-MAX_FLAVORS)));

  const combo = sel.length > 1 ? COMBO_BY_KEY.get(keyOf(sel)) : undefined;
  const sizeInfo = CUP_SIZES.find((s) => s.id === size)!;
  const premium = sel.some((id) => BY_ID[id].group === 2);
  const price = sizeInfo.price + (premium ? PREMIUM_UPCHARGE : 0); // MOCK pricing, see data/menu.ts
  const names = sel.map((id) => BY_ID[id].name);
  const title = combo ? combo.name : names.join(" + ");

  return (
    <div className="wrap mix__in">
      <div className="mix__cup">
        <Cup id="builder" colors={sel.map((id) => BY_ID[id].color)} label={sel.length ? `A cup of frozen daiquiri: ${names.join(", ")}` : "An empty cup. Pick flavors to fill it."} />
      </div>
      <div>
        <p className="eyebrow">Cup builder</p>
        <h2 data-reveal>Pick up to {MAX_FLAVORS}. We&rsquo;ll name the <span className="em">pour</span>.</h2>
        <p className="lede">Mix flavors off the board. If it&rsquo;s a combo we already pour, you&rsquo;ll see its name.</p>

        <p className="flv-g">Start from a board combo</p>
        <div className="combos-scroll" data-lenis-prevent>
          {COMBOS.map((c) => (
            <button key={c.name} type="button" className="chip chip--combo" aria-pressed={keyOf(sel) === keyOf(c.parts)} onClick={() => setSel(c.parts)}>
              {c.name}
            </button>
          ))}
        </div>

        {FLAVOR_GROUPS.map((label, gi) => (
          <div key={label}>
            <p className="flv-g">{label}</p>
            <div className="flv">
              {FLAVORS.filter((f) => f.group === gi).map((f) => (
                <button key={f.id} type="button" className="chip" aria-pressed={sel.includes(f.id)} onClick={() => toggle(f.id)}>
                  <i style={{ ["--c" as string]: f.color }} />
                  {f.name}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="result" aria-live="polite">
          {sel.length === 0 && (<><b>Pick a flavor.</b><span>Tap one above and watch the cup fill.</span></>)}
          {sel.length === 1 && (<><b>{names[0]}</b><span>Straight from the machine. Add another flavor to mix it.</span></>)}
          {sel.length > 1 && combo && (<><b>{combo.name}</b><span>{names.join(" + ")}. That one&rsquo;s on the board as a {combo.kind === "specialty" ? "specialty DAQ" : "daiquiri combo"}.</span></>)}
          {sel.length > 1 && !combo && (<><b>{title}</b><span>Not on the board, so ask for it mixed.</span></>)}
        </div>

        <div className="buy">
          <div className="size" role="group" aria-label="Cup size">
            {CUP_SIZES.map((s) => (
              <button key={s.id} type="button" aria-pressed={size === s.id} onClick={() => setSize(s.id)}>{s.label}</button>
            ))}
          </div>
          {sel.length > 0 ? (
            <AddButton
              className="btn"
              label={`Add to order · ${money(price)}`}
              item={{ key: `cup|${keyOf(sel)}|${size}`, name: `${title}, ${sizeInfo.label}`, detail: combo ? names.join(" + ") : "", price, cup: true }}
            />
          ) : (
            <button type="button" className="btn" disabled>Add to order</button>
          )}
        </div>
        {/* MOCK: prices are placeholders. */}
        <p className="fine">Demo menu, prices placeholder. Nothing is charged on this page.</p>
      </div>
    </div>
  );
}
