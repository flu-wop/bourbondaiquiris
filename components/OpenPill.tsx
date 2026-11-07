"use client";

import { useSyncExternalStore } from "react";
import { statusKey } from "@/lib/hours";

function subscribe(cb: () => void) {
  const t = window.setInterval(cb, 30000);
  return () => window.clearInterval(t);
}

// UNVERIFIED hours drive this pill (see data/site.ts).
export default function OpenPill() {
  const key = useSyncExternalStore(subscribe, () => statusKey(), () => "");
  const [state, label] = key ? key.split("|") : ["", "Westbank, New Orleans"];
  return (
    <p className="pill" data-open={state === "open" ? "true" : state === "closed" ? "false" : undefined}>
      <i aria-hidden="true" />
      <span>{label}</span>
    </p>
  );
}
