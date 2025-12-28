"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCarSide,
  FaRoad,
  FaPlaneDeparture,
  FaInfoCircle,
} from "react-icons/fa";

export default function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [openCard, setOpenCard] = useState(null);

  const pricingCards = [
    {
      id: "local",
      title: "Local Ride Packages",
      price: "Starting ₹1800",
      icon: <FaCarSide size={38} />,
      highlight: "Most Booked",
      desc: "Hourly city ride packages with fixed km limits and vehicle-based pricing.",
      terms: [
        "Dzire: ₹1800 (8 Hours / 80 Km)",
        "Ertiga: ₹2200 (8 Hours / 80 Km)",
        "Innova: ₹3300 (8 Hours / 80 Km)",
        "Extra hour & extra km charges apply as per vehicle",
        "Night charges applicable after 10 PM",
      ],
      link: "/pricing-details",
      delay: 0,
    },
    {
      id: "outstation",
      title: "Outstation Trips",
      price: "₹12–₹18 / km",
      icon: <FaRoad size={38} />,
      highlight: "Best Value",
      desc: "Reliable long-distance travel with experienced drivers.",
      terms: [
        "Minimum 250 km/day billing.",
        "Driver allowance applicable.",
        "Toll & parking extra.",
      ],
      link: "/pricing-details",
      delay: 150,
    },
    {
      id: "airport",
      title: "Airport Transfers",
      price: "Fixed Price",
      icon: <FaPlaneDeparture size={38} />,
      highlight: "Premium Service",
      desc: "Guaranteed on-time pickup & drop for airport travellers.",
      terms: [
        "Includes pickup assistance.",
        "Waiting charge after 15 min.",
        "Luggage assistance included.",
      ],
      link: "/pricing-details",
      delay: 300,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-[#0F0F17] text-white py-28 px-6 sm:px-10 relative overflow-hidden"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[3px] bg-linear-to-r from-transparent via-[#FF6A00] to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-extrabold text-[#FF6A00] tracking-wide drop-shadow-xl"
        >
          Pricing Plans
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Clear, simple and affordable pricing — crafted for your travel needs.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {pricingCards.map((c) => (
            <div
              key={c.id}
              data-aos="zoom-in-up"
              data-aos-delay={c.delay}
              className="group relative p-0.5 rounded-2xl bg-linear-to-br from-[#FF6A00]/40 to-transparenthover:from-[#FF6A00] hover:to-[#FF3C00] transition-all duration-500"
            >
              <div className="bg-[#151522]/70 backdrop-blur-xl p-8 rounded-2xl flex flex-col justify-between h-full transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(255,106,0,0.25)]">
                {/* Badge */}
                <span className="absolute -top-3 right-4 bg-[#FF6A00] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {c.highlight}
                </span>

                {/* Icon */}
                <div className="flex justify-center mb-5 text-[#FF6A00] drop-shadow-xl">
                  {c.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#FF6A00] mb-2">
                  {c.title}
                </h3>

                {/* Price */}
                <p className="text-3xl font-extrabold mb-3">{c.price}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {c.desc}
                </p>

                {/* Terms & Conditions Accordion */}
                <button
                  onClick={() => setOpenCard(openCard === c.id ? null : c.id)}
                  className="flex items-center text-sm text-[#FF6A00] font-semibold mb-2 hover:text-white transition"
                >
                  <FaInfoCircle className="mr-2" /> Terms & Conditions
                </button>

                {openCard === c.id && (
                  <ul className="text-left text-gray-400 text-xs bg-[#1E1E2D]/60 border border-[#FF6A00]/20 p-4 rounded-xl space-y-1">
                    {c.terms.map((t, index) => (
                      <li key={index} className="list-disc list-inside">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Know More Button */}
                <a
                  href={c.link}
                  className="mt-6 inline-block text-center text-sm font-semibold px-5 py-2 rounded-full border border-[#FF6A00]/50 text-[#FF6A00] transition-all duration-300 hover:bg-[#FF6A00] hover:text-black"
                >
                  Know More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
