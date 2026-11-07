import { HOURS_BY_DAY, SITE } from "@/data/site";

// UNVERIFIED hours (see data/site.ts). Computed in the shop's time zone.
const fmt = (h: number) => (h === 12 ? "12pm" : h > 12 ? `${h - 12}pm` : `${h}am`);

const FMT = new Intl.DateTimeFormat("en-US", { timeZone: SITE.timeZone, weekday: "short", hour: "numeric", minute: "numeric", hour12: false });

export function shopNow(now = new Date()) {
  const parts = FMT.formatToParts(now);
  const wd = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hh = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
  const mm = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(wd);
  return { day, t: hh + mm / 60 };
}

/** Returns "open|Open now · until 10pm" or "closed|Closed · opens 12pm", encoded as a stable string. */
export function statusKey(now = new Date()): string {
  const { day, t } = shopNow(now);
  const [open, close] = HOURS_BY_DAY[day];
  if (t >= open && t < close) return `open|Open now · until ${fmt(close)}`;
  if (t < open) return `closed|Closed · opens ${fmt(open)}`;
  const next = HOURS_BY_DAY[(day + 1) % 7][0];
  return `closed|Closed · opens ${fmt(next)} tomorrow`;
}
