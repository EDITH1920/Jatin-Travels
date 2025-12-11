import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";  // ✅ Added analytics

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
  description: "Premium Cab Service in Chhattisgarh — Book Safe & Reliable Rides Anytime.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* ✅ Vercel Analytics must be inside <body> */}
        <Analytics />
      </body>
    </html>
  );
}
