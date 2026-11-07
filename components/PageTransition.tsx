"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { getLenis } from "@/lib/lenis";
import { prefersReducedMotion } from "@/lib/motion";

const Ctx = createContext<{ go: (href: string) => void }>({ go: () => {} });

/** Purple curtain wipe between routes. The curtain lives in the root layout so it survives navigation. */
export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const covering = useRef(false);
  const hash = useRef("");

  const go = useCallback((href: string) => {
    const el = curtain.current;
    if (!el || prefersReducedMotion() || covering.current) { router.push(href); return; }
    covering.current = true;
    hash.current = new URL(href, window.location.href).hash;
    el.dataset.on = "true";
    gsap.fromTo(el, { yPercent: 100 }, { yPercent: 0, duration: 0.5, ease: "power3.inOut", onComplete: () => router.push(href) });
    // Safety: never leave the curtain up if navigation stalls.
    window.setTimeout(() => {
      if (covering.current) {
        covering.current = false;
        gsap.to(el, { yPercent: -100, duration: 0.5, onComplete: () => { el.dataset.on = "false"; } });
      }
    }, 4000);
  }, [router]);

  useEffect(() => {
    const el = curtain.current;
    if (!covering.current || !el) return;
    covering.current = false;
    const lenis = getLenis();
    lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    gsap.to(el, {
      yPercent: -100, duration: 0.6, delay: 0.12, ease: "power3.inOut",
      onComplete: () => { el.dataset.on = "false"; },
      onStart: () => {
        if (hash.current) {
          const t = document.querySelector(hash.current);
          if (t && lenis) lenis.scrollTo(t as HTMLElement, { immediate: true, offset: -80 });
          else if (t) t.scrollIntoView();
        }
      },
    });
  }, [pathname]);

  return (
    <Ctx.Provider value={{ go }}>
      {children}
      <div ref={curtain} className="curtain" data-on="false" aria-hidden="true">Bourbon Daiquiris</div>
    </Ctx.Provider>
  );
}

/** Internal link that plays the curtain. External, modified and same-page clicks fall through to the browser. */
export function TLink({ href, onClick, ...rest }: React.ComponentProps<typeof Link> & { href: string }) {
  const { go } = useContext(Ctx);
  const pathname = usePathname();
  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const path = href.split("#")[0] || pathname;
        if (path === pathname) return;
        e.preventDefault();
        go(href);
      }}
    />
  );
}
