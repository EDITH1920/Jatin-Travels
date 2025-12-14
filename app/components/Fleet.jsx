"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaSuitcase, FaSnowflake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import dzire from "../assets/fleet/dzire.png";
import ertiga from "../assets/fleet/ertiga.png";
import innova from "../assets/fleet/innova.png";
import traveller from "../assets/fleet/traveller.png";

/* ------------------------------------------------------------------
   FLEET DATA (easy to extend later)
------------------------------------------------------------------- */
const fleetData = [
  {
    name: "Swift Dzire",
    image: dzire,
    category: "city",
    price: "₹12 / km",
    passengers: "4 Passengers",
    luggage: "2 Bags",
  },
  {
    name: "Ertiga",
    image: ertiga,
    category: "outstation",
    price: "₹15 / km",
    passengers: "6–7 Passengers",
    luggage: "4 Bags",
  },
  {
    name: "Innova",
    image: innova,
    category: "outstation",
    price: "₹18 / km",
    passengers: "7 Passengers",
    luggage: "5 Bags",
  },
  {
    name: "Traveller",
    image: traveller,
    category: "group",
    price: "₹25 / km",
    passengers: "12–17 Passengers",
    luggage: "Large Luggage",
  },
];

export default function Fleet({ openBookingModal }) {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const filteredFleet =
    activeFilter === "all"
      ? fleetData
      : fleetData.filter((car) => car.category === activeFilter);

  return (
    <section
      id="fleet"
      className="bg-[#0F0F17] text-white py-28 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-4xl font-extrabold text-[#FF6A00]"
          >
            Our Fleet
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-400 mt-3 max-w-2xl mx-auto"
          >
            Choose the right vehicle for your journey — city, outstation or
            group travel.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-center gap-3 mb-14 flex-wrap"
        >
          {[
            { id: "all", label: "All" },
            { id: "city", label: "City" },
            { id: "outstation", label: "Outstation" },
            { id: "group", label: "Group" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition
                border border-[#FF6A00]/40
                ${
                  activeFilter === f.id
                    ? "bg-[#FF6A00] text-black"
                    : "text-[#FF6A00] hover:bg-[#FF6A00]/20"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* FLEET GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredFleet.map((car, idx) => (
            <div
              key={idx}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 150}
              className="bg-[#151522] rounded-2xl p-6 border border-[#FF6A00]/20 hover:border-[#FF6A00] transition hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,106,0,0.25)] duration-300"
            >
              {/* IMAGE */}
              <div className="h-36 flex items-center justify-center mb-6">
                <Image
                  src={car.image}
                  alt={car.name}
                  className="object-contain h-full"
                />
              </div>

              {/* NAME */}
              <h3 className="text-xl font-bold mb-1">{car.name}</h3>

              {/* PRICE */}
              <p className="text-[#FF6A00] font-semibold mb-4">
                Starting @ {car.price}
              </p>

              {/* FEATURES */}
              <div className="space-y-2 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <FaUsers /> {car.passengers}
                </div>
                <div className="flex items-center gap-2">
                  <FaSuitcase /> {car.luggage}
                </div>
                <div className="flex items-center gap-2 text-[#FF6A00]">
                  <FaSnowflake /> AC Available
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    openBookingModal && openBookingModal(car.name)
                  }
                  className="flex-1 py-2 rounded-full text-sm font-semibold text-[#FF6A00] border border-[#FF6A00]/40 hover:bg-[#FF6A00] hover:text-black transition"
                >
                  Book Now
                </button>

                <Link
                  href="/pricing-details"
                  className=" flex-1 py-2 rounded-full text-sm font-semibold text-gray-300 border border-gray-600 hover:border-[#FF6A00] hover:text-[#FF6A00] transition text-center"
                >
                  Pricing
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
