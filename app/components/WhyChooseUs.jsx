"use client";

import React, { useEffect } from "react";
import { FaShieldAlt, FaRupeeSign, FaUserTie } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-white dark:bg-black py-14 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 
          data-aos="fade-up" 
          className="text-3xl sm:text-4xl font-bold text-[#FF6A00] mb-10"
        >
          Why Choose Us?
        </h2>

        {/* 3 Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

          {/* Safe & Reliable */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="bg-[#1B1B2F] text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <FaShieldAlt className="text-[#FF6A00] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe & Reliable</h3>
            <p className="text-gray-300 text-sm">
              Verified drivers and clean, well-maintained cabs for every ride.
            </p>
          </div>

          {/* Affordable Pricing */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="bg-[#1B1B2F] text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <FaRupeeSign className="text-[#FF6A00] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-300 text-sm">
              Best price guaranteed with transparent fare — no hidden charges.
            </p>
          </div>

          {/* Professional Drivers */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="bg-[#1B1B2F] text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <FaUserTie className="text-[#FF6A00] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Drivers</h3>
            <p className="text-gray-300 text-sm">
              Experienced, polite, and trained drivers for a smooth journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
