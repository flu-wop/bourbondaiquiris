"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE } from "@/data/site";
import { useCart } from "./CartProvider";
import { TLink } from "./PageTransition";

export default function Nav() {
  const { count, openCart } = useCart();
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="nav" data-solid={solid}>
      <div className="wrap nav__in">
        <TLink href="/" className="brand" aria-label="Bourbon Daiquiris, home">
          Bourbon <span>Daiquiris</span>
        </TLink>
        <nav className="nav__links" aria-label="Main">
          <TLink href="/menu" className="nav__link" aria-current={pathname === "/menu" ? "page" : undefined}>Menu</TLink>
          <TLink href="/events" className="nav__link" aria-current={pathname === "/events" ? "page" : undefined}>Events</TLink>
          <a className="btn" href={SITE.uberEats} target="_blank" rel="noopener">Order</a>
          <button type="button" className="cart-btn" onClick={openCart} aria-label={`Open order, ${count} ${count === 1 ? "item" : "items"}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9h12l-1.4 11H7.4z" /><path d="M9 9V7a3 3 0 0 1 6 0v2" />
            </svg>
            <b data-on={count > 0}>{count}</b>
          </button>
        </nav>
      </div>
    </header>
  );
}
