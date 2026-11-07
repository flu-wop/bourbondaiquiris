import type { Metadata, Viewport } from "next";
import { Anton, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { TransitionProvider } from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollEffects from "@/components/ScrollEffects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono", display: "swap" });

const title = "Bourbon Daiquiris Wings & Things | Westbank, New Orleans";
const description = "Frozen daiquiris, wings and things at 3637 General De Gaulle Drive on the Westbank. Let's make pour decisions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bourbondaiquiris.vercel.app"),
  title: { default: title, template: "%s | Bourbon Daiquiris" },
  description,
  // Demo build: noindex until the client signs. Remove at launch (also the X-Robots-Tag header in next.config.ts).
  robots: { index: false, follow: false },
  openGraph: { title: "Bourbon Daiquiris Wings & Things", description, url: "/", siteName: "Bourbon Daiquiris Wings & Things", type: "website" },
  twitter: { card: "summary_large_image", title: "Bourbon Daiquiris Wings & Things", description },
};

export const viewport: Viewport = { themeColor: "#801aae", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <body>
        <CartProvider>
          <TransitionProvider>
            <a className="skip" href="#main">Skip to content</a>
            <SmoothScroll />
            <ScrollEffects />
            <Nav />
            <main id="main">{children}</main>
            <Footer />
            <CartDrawer />
          </TransitionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
