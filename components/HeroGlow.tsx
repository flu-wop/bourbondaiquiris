"use client";

import { useEffect, useRef } from "react";

/** Pointer-following neon glow. Hover devices only, written straight to a CSS variable (no re-renders). */
export default function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current?.parentElement;
    const glow = ref.current;
    if (!el || !glow) return;
    if (!window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      glow.style.setProperty("--mx", `${e.clientX - r.left}px`);
      glow.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="hero__glow" aria-hidden="true" />;
}
