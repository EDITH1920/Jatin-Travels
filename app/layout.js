import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import { PricingModalProvider } from "./components/PricingModalProvider";
import Breadcrumbs from "./components/Breadcrumbs";
import BreadcrumbSEO from "./components/BreadcrumbSEO";
import BottomMobileNav from "./components/BottomMobileNav";
import LocalBusinessSEO from "./components/LocalBusinessSEO";

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
  title: {
    default: "Jatin Travels | Cab Service in Chhattisgarh",
    template: "%s | Jatin Travels",
  },
  description:
    "Jatin Travels offers reliable cab services in Korba, Raipur, Bilaspur and across Chhattisgarh. Book one-way, round-trip and local cabs via WhatsApp with transparent pricing.",
  keywords: [
    "Jatin Travels",
    "cab service in Korba",
    "taxi service Korba",
    "Korba to Raipur cab",
    "Bilaspur cab booking",
    "Raipur taxi service",
    "one way cab Korba",
    "cab service Chhattisgarh",
  ],
  metadataBase: new URL("https://jatintravels.in"),
  openGraph: {
    title: "Jatin Travels – Trusted Cab Service in Chhattisgarh",
    description:
      "Affordable cab services with Swift Dzire, Ertiga & Innova. WhatsApp booking available across Korba, Raipur & Bilaspur.",
    url: "https://jatintravels.in",
    siteName: "Jatin Travels",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Breadcrumbs />
        {/* <LocalBusinessSEO /> */}
        {/* <BreadcrumbSEO /> */}
        <PricingModalProvider>
          {children}
        </PricingModalProvider>
        <Analytics />
        <BottomMobileNav />
      </body>
    </html>
  );
}
