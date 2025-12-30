import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import BottomMobileNav from "./components/BottomMobileNav";
import Breadcrumbs from "./components/Breadcrumbs";
import BreadcrumbSEO from "./components/BreadcrumbSEO";
import LocalBusinessSEO from "./components/LocalBusinessSEO";
import { PricingModalProvider } from "./components/PricingModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* =========================
   ✅ GLOBAL SEO METADATA
   ========================= */
export const metadata = {
  metadataBase: new URL("https://jatintravels.in"),
  title: {
    default: "Jatin Travels | Cab Service in Chhattisgarh",
    template: "%s | Jatin Travels",
  },
  description:
    "Jatin Travels provides reliable cab services in Korba, Raipur, Bilaspur and across Chhattisgarh. Book local, outstation and one-way taxis via WhatsApp.",
  keywords: [
    "Jatin Travels",
    "cab service in Korba",
    "Korba taxi",
    "Korba to Raipur cab",
    "Bilaspur cab booking",
    "Raipur taxi service",
    "one way cab Korba",
    "Chhattisgarh cab service",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jatin Travels – Trusted Cab Service in Chhattisgarh",
    description:
      "Affordable cab services with Swift Dzire, Ertiga & Innova. WhatsApp booking available across Korba, Raipur & Bilaspur.",
    url: "https://jatintravels.in",
    siteName: "Jatin Travels",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ================= GLOBAL STRUCTURED DATA ================= */}
        <LocalBusinessSEO />
        <BreadcrumbSEO />

        {/* ================= UI ================= */}
        <Navbar />
        <Breadcrumbs />

        <PricingModalProvider>
          {children}
        </PricingModalProvider>

        <BottomMobileNav />
        <Analytics />
      </body>
    </html>
  );
}
