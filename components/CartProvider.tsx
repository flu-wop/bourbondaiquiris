"use client";

import { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { addItem, clearCart, getServerSnapshot, getSnapshot, removeItem, setQty, subscribe, type CartItem } from "@/lib/cart-store";
import { getLenis } from "@/lib/lenis";

type Ctx = {
  items: CartItem[];
  count: number;
  subtotal: number;
  hasCup: boolean;
  open: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: typeof addItem;
  setQty: typeof setQty;
  remove: typeof removeItem;
  clear: typeof clearCart;
};

const CartCtx = createContext<Ctx | null>(null);

/** One provider in the root layout: the cart persists across routes and reloads. Client-side only, no backend. */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      if (!lenis) document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  const value = useMemo<Ctx>(() => ({
    items,
    count: items.reduce((s, i) => s + i.qty, 0),
    subtotal: items.reduce((s, i) => s + i.qty * i.price, 0),
    hasCup: items.some((i) => i.cup),
    open,
    openCart: () => setOpen(true),
    closeCart: () => setOpen(false),
    add: addItem,
    setQty,
    remove: removeItem,
    clear: clearCart,
  }), [items, open]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
}
