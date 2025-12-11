"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import yellowCab from "../assets/yellow-cab.png";
import bgCity from "../assets/city.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

// Background image static style (SAFE for SSR)
const bgStyle = {
  backgroundImage: `url(${bgCity.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 40,
    });
  }, []);

  return (
    <div style={bgStyle} className="overflow-hidden">
      {/* Dark transparent overlay */}
      <div className="bg-[#1B1B2F]/65 backdrop-blur-sm text-white h-full w-full">

        {/* UPDATED PADDING HERE → pt-28 sm:pt-36 */}
        <div className="container mx-auto flex flex-col items-center text-center pt-28 sm:pt-36 pb-2">

          {/* Badge */}
          <div
            data-aos="fade-down"
            className="bg-[#FF6A00] px-6 py-1 rounded-full text-sm font-semibold shadow-lg tracking-wide"
          >
            24×7 Premium Cab Service
          </div>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-3xl sm:text-6xl font-bold leading-tight text-[#FF6A00]"
            style={{ textShadow: "0px 4px 18px rgba(0,0,0,0.65)" }}
          >
            Jatin Travels
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-base sm:text-xl text-[#F8F8F8]/90 mt-4 max-w-xl"
          >
            Book your ride anytime, anywhere with Jatin Travels — trusted across
            Chhattisgarh.
          </p>

          {/* Call Button */}
          <a
            href="tel:+919179053619"
            data-aos="zoom-in"
            data-aos-delay="600"
            className="mt-6 inline-flex items-center gap-3 bg-[#FF6A00] hover:bg-[#E85B00] transition-all duration-300 shadow-2xl px-6 py-3 rounded-full text-lg font-semibold text-white"
          >
            <FaPhoneAlt size={20} />
            91790-53619
          </a>

          {/* Car Image */}
          <div
            data-aos="zoom-in-right"
            data-aos-delay="800"
            className="mt-6 sm:mt-8 -mb-10 sm:-mb-14 drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]"
          >
            <div data-aos="zoom-in-up" data-aos-delay="500" className="mt-10">
              <Image
                src={yellowCab}
                alt="Cab Car"
                className="max-h-[220px] sm:max-h-[340px] md:max-h-[420px] lg:max-h-[480px] mx-auto object-contain float-car"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
