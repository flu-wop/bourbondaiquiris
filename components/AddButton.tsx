"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import type { CartItem } from "@/lib/cart-store";

export default function AddButton({ item, label = "Add", className = "btn btn--sm" }: { item: Omit<CartItem, "qty">; label?: string; className?: string }) {
  const { add } = useCart();
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={className}
      onClick={() => { add(item); setDone(true); window.setTimeout(() => setDone(false), 1400); }}
      aria-label={`${label} ${item.name}`}
    >
      {done ? "Added" : label}
    </button>
  );
}
