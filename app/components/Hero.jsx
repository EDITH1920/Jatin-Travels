"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaRoute,
  FaShieldAlt,
  FaClock,
  FaChevronDown,
  FaPhoneAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0F0F17] overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#FF6A00]/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#FF6A00]/10 rounded-full blur-[110px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          {/* LOCATION BADGE */}
          <div
            data-aos="fade-right"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300"
          >
            <FaMapMarkerAlt className="text-[#FF6A00]" />
            Serving Across Chhattisgarh
          </div>

          {/* HEADLINE */}
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            Book Reliable & Comfortable
            <br />
            <span className="text-[#FF6A00]">Cab Services in Chhattisgarh</span>
          </h1>

          {/* SUBTITLE */}
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-400 text-lg max-w-xl"
          >
            Local rides, outstation trips, airport transfers, and tourist travel
            across Chhattisgarh with professional drivers, clean vehicles, and
            transparent pricing.
          </p>

          {/* TRUST POINTS */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="grid grid-cols-2 sm:grid-cols-3 gap-5 text-sm text-gray-300"
          >
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-[#FF6A00]" />
              Safe & Verified Drivers
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-[#FF6A00]" />
              24/7 Availability
            </div>
            <div className="flex items-center gap-3">
              <FaRoute className="text-[#FF6A00]" />
              Local & Outstation
            </div>
          </div>

          {/* ROUTE HIGHLIGHTS */}
          <div
            data-aos="fade-up"
            data-aos-delay="320"
            className="flex flex-wrap items-center gap-3 text-sm text-gray-300"
          >
            <span className="text-white/80">Popular Routes:</span>

            {[
              "Korba ↔ Raipur",
              "Korba ↔ Bilaspur",
              "Raipur ↔ Jagdalpur",
            ].map((route) => (
              <span
                key={route}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 cursor-pointer transition-all duration-300 hover:bg-[#FF6A00] hover:text-black hover:scale-105"
              >
                {route}
              </span>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div
            data-aos="fade-up"
            data-aos-delay="380"
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2"
          >
            {/* BOOK MODAL */}
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("openBookingModal"))
              }
              className="px-8 py-4 rounded-full bg-[#FF6A00] text-black font-bold text-lg hover:bg-[#E85B00] transition shadow-lg cursor-pointer"
            >
              Book a Cab
            </button>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919179053619"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-[#25D366]/40 text-[#25D366] font-bold text-lg hover:bg-[#25D366] hover:text-black transition flex items-center justify-center gap-3 cursor-pointer"
            >
              <FaWhatsapp size={22} />
              WhatsApp Us
            </a>

            {/* CALL NOW */}
            <a
              href="tel:+919179053619"
              className="px-6 py-4 rounded-full border border-white/10 text-white/80 hover:text-[#FF6A00] hover:border-[#FF6A00] transition flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer"
            >
              <FaPhoneAlt size={14} />
              Call Now
            </a>
          </div>

          {/* VIEW PRICING LINK */}
          <div data-aos="fade-up" data-aos-delay="450">
            <Link
              href="/pricing-details"
              className="inline-flex items-center gap-2 text-[#FF6A00] font-semibold hover:underline underline-offset-4 transition"
            >
               View Pricing Details
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] sm:w-[360px] lg:w-[420px] aspect-4/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/hero-car.png"
              alt="Swift Dzire Cab Service in Chhattisgarh"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-wide">Scroll to explore</span>
        <FaChevronDown className="animate-bounce text-[#FF6A00]" />
      </div>
    </section>
  );
}
