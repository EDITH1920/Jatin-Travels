"use client";

import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <footer className="bg-[#1B1B2F] text-white pt-16 pb-10 px-6 sm:px-10 shadow-[-1px_-4px_10px_rgba(0,0,0,0.4)]">

      {/* Orange Top Line */}
      <div className="w-full h-1 bg-linear-to-r from-[#FF6A00] via-[#E85B00] to-[#FF6A00] mb-10 rounded-full"></div>

      {/* MAIN GRID */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        data-aos="fade-up"
      >

        {/* BRAND SECTION */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#FF6A00]">Jatin Travels</h2>

          <p className="text-[#CFCFCF] leading-relaxed text-sm">
            Safe, comfortable and reliable cab service across Chhattisgarh.
            We provide premium rides at affordable pricing with 24×7 customer support.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 text-2xl mt-4">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1AH641RQnu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6A00] hover:text-white duration-300"
            >
              <FaFacebook />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jatintravels.in?igsh=MXB5cW4wM2t3MG1pYQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6A00] hover:text-white duration-300"
            >
              <FaInstagram />
            </a>

            {/* Google Business */}
           <a
            href="https://g.co/kgs/YOUR_GOOGLE_BUSINESS_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6A00] hover:text-white duration-300"
            >
              <FaGoogle />
              </a>


          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#FF6A00]">Quick Links</h3>
          <ul className="space-y-3 text-[#CFCFCF] text-sm">
            <li className="hover:text-white duration-200 cursor-pointer">Book a Ride</li>
            <li className="hover:text-white duration-200 cursor-pointer">Our Services</li>
            <li className="hover:text-white duration-200 cursor-pointer">Pricing</li>
            <li className="hover:text-white duration-200 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-5">
          <h3 className="text-xl font-semibold text-[#FF6A00]">Contact Us</h3>

          <div className="flex items-start gap-3 text-[#CFCFCF]">
            <FaMapMarkerAlt className="text-[#FF6A00] text-xl" />
            <p>Korba, Chhattisgarh</p>
          </div>

          <div className="flex items-start gap-3 text-[#CFCFCF]">
            <MdCall className="text-[#FF6A00] text-xl" />
            <p>+91 91790-53619</p>
          </div>

          <div className="flex items-start gap-3 text-[#CFCFCF]">
            <MdEmail className="text-[#FF6A00] text-xl" />
            <p>jatintravels@gmail.com</p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 text-center text-gray-400 text-sm border-t border-white/10 pt-4">
        © {new Date().getFullYear()} Jatin Travels. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
