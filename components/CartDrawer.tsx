"use client";

import { useEffect, useRef } from "react";
import { SITE } from "@/data/site";
import { money } from "@/lib/format";
import { useCart } from "./CartProvider";

export default function CartDrawer() {
  const { open, closeCart, items, subtotal, setQty, remove, hasCup, count } = useCart();
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      opener.current = document.activeElement as HTMLElement;
      closeRef.current?.focus();
      const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeCart(); };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
    opener.current?.focus?.();
  }, [open, closeCart]);

  return (
    <>
      <div className="overlay" data-open={open} onClick={closeCart} aria-hidden="true" />
      <aside className="cart" data-open={open} aria-label="Your order" role="dialog" aria-modal={open} inert={!open}>
        <div className="cart__head">
          <h2>Your order</h2>
          <button ref={closeRef} type="button" className="x" onClick={closeCart} aria-label="Close order">&times;</button>
        </div>
        <div className="cart__items" data-lenis-prevent>
          {items.length === 0 ? (
            <p className="cart__empty">Nothing here yet. Build a cup or add something from the menu.</p>
          ) : (
            items.map((i) => (
              <div className="line" key={i.key}>
                <div>
                  <div className="line__name">{i.name}</div>
                  {i.detail && <div className="line__detail">{i.detail}</div>}
                </div>
                <div className="line__price">{money(i.price * i.qty)}</div>
                <div className="line__ctl">
                  <button type="button" className="qty" onClick={() => setQty(i.key, i.qty - 1)} aria-label={`Fewer ${i.name}`}>&minus;</button>
                  <span className="line__q" aria-live="polite">{i.qty}</span>
                  <button type="button" className="qty" onClick={() => setQty(i.key, i.qty + 1)} aria-label={`More ${i.name}`}>+</button>
                  <button type="button" className="rm" onClick={() => remove(i.key)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart__foot">
          <span className="cart__demo">Demo menu, prices placeholder</span>
          <div className="cart__sub"><span>Subtotal</span><span>{money(subtotal)}</span></div>
          <a className="btn" href={SITE.uberEats} target="_blank" rel="noopener" aria-disabled={count === 0} style={count === 0 ? { opacity: 0.4, pointerEvents: "none" } : undefined}>
            Continue on Uber Eats
          </a>
          <p className="cart__note">
            This opens an Uber Eats search in a new tab. Your cart does not transfer, and nothing is charged here.
            {hasCup && " Daiquiris are 21+ with a valid ID."}
          </p>
        </div>
      </aside>
    </>
  );
}
