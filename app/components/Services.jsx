"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCarSide, FaRoad, FaPlaneDeparture } from "react-icons/fa";

const serviceData = [
  {
    key: "local",
    icon: FaCarSide,
    title: "Local Rides",
    desc: "Fast and comfortable travel inside the city.",
    delay: 0,
  },
  {
    key: "outstation",
    icon: FaRoad,
    title: "Outstation Trips",
    desc: "Long-distance travel with comfort and safety.",
    delay: 150,
  },
  {
    key: "airport",
    icon: FaPlaneDeparture,
    title: "Airport Pickup & Drop",
    desc: "On-time airport transfers.",
    delay: 300,
  },
];

export default function Services({ openBookingModal }) {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
    });
  }, []);

  // 🔥 Cursor glow movement logic (safe for hydration)
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    const cards = document.querySelectorAll(".book-btn-group");

    if (!glow) return;

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - 16;
        const y = e.clientY - rect.top - 16;
        glow.style.transform = `translate(${x}px, ${y}px)`;
      });

      card.addEventListener("mouseleave", () => {
        glow.style.opacity = 0;
      });

      card.addEventListener("mouseenter", () => {
        glow.style.opacity = 1;
      });
    });
  }, []);

  return (
    <section
      id="services"
      className="bg-[#0F0F17] text-white py-28 px-6 sm:px-10 relative overflow-hidden"
    >
      {/* Section Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[3px] bg-linear-to-r from-transparent via-[#FF6A00] to-transparent opacity-60"></div>

      {/* Cursor Glow Element */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-8 h-8 bg-[#FF6A00]/40 rounded-full opacity-0 transition-all duration-200 blur-md z-999"
      ></div>

      <div className="max-w-7xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-extrabold text-[#FF6A00] drop-shadow-xl tracking-wide"
        >
          Our Services
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Premium cab services designed for comfort, safety, and reliability.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {serviceData.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.key}
                data-aos="zoom-in-up"
                data-aos-delay={s.delay}
                className="group relative p-0.5 rounded-2xl bg-linear-to-br from-[#FF6A00]/40 to-transparent hover:from-[#FF6A00] hover:to-[#FF3C00] transition-all duration-500"
              >
                <div className="service-card bg-[#151522]/60 backdrop-blur-2xl rounded-2xl p-10 h-full transition-all duration-500 hover:shadow-[0_25px_60px_rgba(255,106,0,0.25)]">

                  {/* Icon */}
                  <div className="relative flex justify-center mb-8">
                    <span className="text-[#FF6A00] group-hover:scale-110 transition-transform duration-500 animate-float">
                      <Icon size={48} />
                    </span>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#FF6A00]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 tracking-wide">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {s.desc}
                  </p>

                  {/* Book Button */}
                  <div className="book-btn-group relative inline-block">
                    <button
                      onClick={() =>
                        openBookingModal && openBookingModal(s.title)
                      }
                      className="relative inline-block text-sm font-semibold px-5 py-2 rounded-full border border-[#FF6A00]/50 text-[#FF6A00] transition-all duration-300 overflow-hidden cursor-none hover:bg-[#FF6A00] hover:text-black"
                    >
                      Book Now
                    </button>
                  </div>

                  {/* Light Sweep */}
                  <div className="absolute left-0 top-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent animate-sweep"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
