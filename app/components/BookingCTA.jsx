"use client";

import React, { useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const BookingCTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-[#1B1B2F] py-14 px-6 sm:px-10 text-center text-white relative overflow-hidden">

      {/* Orange Gradient Top Strip */}
      <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-[#FF6A00] via-[#E85B00] to-[#FF6A00]"></div>

      {/* Content */}
      <div data-aos="fade-up" className="max-w-3xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-[#FF6A00]">
          Need a Cab Right Now?
        </h2>

        <p className="mt-4 text-lg text-[#CFCFCF]">
          We are available <span className="text-[#FF6A00] font-semibold">24×7</span>.
          Fast, safe, and affordable cab service across Chhattisgarh.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-5 flex-wrap">

          {/* Call Button */}
          <a
            href="tel:+919179053619"
            data-aos="zoom-in"
            className="flex items-center gap-3 bg-[#FF6A00] hover:bg-[#E85B00] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-xl transition-all duration-300"
          >
            <FaPhoneAlt size={20} />
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919179053619"
            target="_blank"
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-xl transition-all duration-300"
          >
            <FaWhatsapp size={20} />
            WhatsApp Us
          </a>

        </div>

      </div>
    </section>
  );
};

export default BookingCTA;
