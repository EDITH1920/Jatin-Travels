"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaGoogle, FaMapMarkerAlt } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <footer className="bg-[#0F0F17] text-white pt-16 pb-16 px-6 sm:px-10 border-t border-white/10">
      {/* ORANGE GRADIENT LINE */}
      <div className="w-full h-1 bg-linear-to-r from-[#FF6A00] via-[#E85B00] to-[#FF6A00] mb-12 rounded-full"></div>

      {/* MAIN GRID */}
      <div data-aos="fade-up" className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* BRAND */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-[#FF6A00]">Jatin Travels</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Reliable cab and taxi services across Chhattisgarh for local,
            outstation, airport, and tourist travel. Safe, comfortable,
            and affordable journeys—every time.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5 text-xl mt-5">
            <a href="https://www.facebook.com/share/1AH641RQnu/" target="_blank" rel="noopener noreferrer" className="text-[#FF6A00] hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/jatintravels.in" target="_blank" rel="noopener noreferrer" className="text-[#FF6A00] hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://maps.app.goo.gl/vvzrfyLtjnRxCp5m6" target="_blank" rel="noopener noreferrer" className="text-[#FF6A00] hover:text-white transition">
              <FaGoogle />
            </a>
          </div>
        </div>

        {/* QUICK LINKS (UPDATED) */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FF6A00]">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openBookingModal"))}
                className="hover:text-white transition"
              >
                Book a Ride
              </button>
            </li>
            <li><Link href="/pricing-details" className="hover:text-white transition">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-[#FF6A00]">Contact Us</h3>

          <div className="flex items-start gap-3 text-gray-400 text-sm">
            <FaMapMarkerAlt className="text-[#FF6A00] text-lg mt-1" />
            <p>Dhodhipara Main Road, Korba,<br />Chhattisgarh – 495677</p>
          </div>

          <a href="tel:+919179053619" className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm">
            <MdCall className="text-[#FF6A00] text-lg" /> +91 91790 53619
          </a>

          <a href="mailto:jatintravels24@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm">
            <MdEmail className="text-[#FF6A00] text-lg" /> jatintravels24@gmail.com
          </a>
        </div>
      </div>

      {/* COPYRIGHT ONLY */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-white/10 pt-4">
        © {new Date().getFullYear()} Jatin Travels. All Rights Reserved.
      </div>
    </footer>
  );
}
