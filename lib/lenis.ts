import type Lenis from "lenis";

// Shared Lenis instance so the cart drawer and page transition can stop/scroll it.
let instance: Lenis | null = null;
export const setLenis = (l: Lenis | null) => { instance = l; };
export const getLenis = () => instance;
