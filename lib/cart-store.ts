// Client-only cart. A tiny external store backed by localStorage, read through useSyncExternalStore,
// so the cart persists across routes (one provider in the root layout) and across reloads.
export type CartItem = { key: string; name: string; detail: string; price: number; qty: number; cup?: boolean };

const KEY = "bd-cart-v1";
const EMPTY: CartItem[] = [];
let items: CartItem[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function emit() { listeners.forEach((l) => l()); }

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) items = parsed.filter((i) => i && typeof i.key === "string" && i.qty > 0);
  } catch {
    items = EMPTY;
  }
}

function commit(next: CartItem[]) {
  items = next.length ? next : EMPTY;
  try { window.localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* private mode */ }
  emit();
}

export function subscribe(l: () => void) {
  listeners.add(l);
  if (!loaded) { load(); queueMicrotask(emit); }
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      try { items = e.newValue ? JSON.parse(e.newValue) : EMPTY; } catch { items = EMPTY; }
      emit();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(l); window.removeEventListener("storage", onStorage); };
}

export const getSnapshot = () => items;
export const getServerSnapshot = () => EMPTY;

export function addItem(i: Omit<CartItem, "qty">) {
  const hit = items.find((x) => x.key === i.key);
  commit(hit ? items.map((x) => (x.key === i.key ? { ...x, qty: x.qty + 1 } : x)) : [...items, { ...i, qty: 1 }]);
}
export function setQty(key: string, qty: number) {
  commit(qty <= 0 ? items.filter((x) => x.key !== key) : items.map((x) => (x.key === key ? { ...x, qty } : x)));
}
export function removeItem(key: string) { commit(items.filter((x) => x.key !== key)); }
export function clearCart() { commit([]); }
