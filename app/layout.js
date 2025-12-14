import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; // ✅ Added analytics
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

export const metadata = {
  title: "Jatin Travels",
  description:
    "Premium Cab Service in Chhattisgarh — Book Safe & Reliable Rides Anytime.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* <-- Added Nav Section here */}
        <Breadcrumbs />
        {/* <LocalBusinessSEO /> */}
        {/* <BreadcrumbSEO /> */}
        <PricingModalProvider>
          {children}
        </PricingModalProvider>
        {/* ✅ Vercel Analytics must be inside <body> */}
        <Analytics />
        <BottomMobileNav />
      </body>
    </html>
  );
}
