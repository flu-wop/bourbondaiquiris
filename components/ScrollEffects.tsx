"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Declarative scroll motion, driven by data attributes so pages stay server components:
 *   [data-reveal]        fade/slide up        [data-stagger]  children reveal in sequence
 *   [data-parallax=".06"] photo parallax      [data-hero-photo] hero drifts as you leave
 *   [data-stage]         pinned, staged menu with a scroll-linked cup
 * Content is fully visible with no JS or with prefers-reduced-motion (nothing is hidden by CSS).
 */
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, { y: 44, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
        gsap.from(Array.from(el.children), { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const inner = el.querySelector<HTMLElement>(".ph__in");
        if (!inner) return;
        const sp = Math.min(0.06, Number(el.dataset.parallax) || 0.06);
        gsap.fromTo(inner, { yPercent: -sp * 100 }, { yPercent: sp * 100, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
      });

      const heroPhoto = document.querySelector<HTMLElement>("[data-hero-photo]");
      if (heroPhoto) {
        gsap.to(heroPhoto, { yPercent: 8, scale: 1.04, ease: "none", scrollTrigger: { trigger: heroPhoto.parentElement, start: "top top", end: "bottom top", scrub: true } });
      }

      gsap.utils.toArray<HTMLElement>("[data-stage]").forEach((el) => {
        const panels = Array.from(el.querySelectorAll<HTMLElement>("[data-stage-item]"));
        const liquid = el.querySelector<SVGRectElement>("[data-liquid]");
        const dome = el.querySelector<SVGGElement>("[data-dome]");
        const domeParts = dome ? Array.from(dome.querySelectorAll<SVGPathElement>("path.fl")) : [];
        const cup = el.querySelector<HTMLElement>("[data-stage-cup]");
        if (panels.length < 2 || !liquid) return;

        const stateOf = (p: HTMLElement) => ({ color: p.dataset.color || "#ff4fc8", level: Number(p.dataset.level) || 0.5 });
        const place = (lvl: number) => ({ y: 330 - 202 * lvl, height: 202 * lvl + 2 });
        const s0 = stateOf(panels[0]);
        gsap.set(panels.slice(1), { autoAlpha: 0, y: 48 });
        gsap.set(liquid, { attr: place(s0.level), fill: s0.color });
        gsap.set(domeParts, { fill: s0.color });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: el, start: "top top", end: () => `+=${panels.length * 75}%`, pin: true, scrub: 0.5, anticipatePin: 1, invalidateOnRefresh: true },
        });
        panels.forEach((p, i) => {
          if (i === 0) return;
          const s = stateOf(p);
          tl.to(panels[i - 1], { autoAlpha: 0, y: -48, duration: 0.5 }, i)
            .to(p, { autoAlpha: 1, y: 0, duration: 0.5 }, i + 0.15)
            .to(liquid, { attr: place(s.level), fill: s.color, duration: 1 }, i)
            .to(domeParts, { fill: s.color, duration: 1 }, i);
          if (cup) tl.to(cup, { rotate: i % 2 ? -7 : 6, duration: 1 }, i);
        });
        tl.to({}, { duration: 0.4 });
      });
    });

    // ScrollTrigger already refreshes on window load; no extra refresh here.
    return () => ctx.revert();
  }, [pathname]);

  return null;
}
