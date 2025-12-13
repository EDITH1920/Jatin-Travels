"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCarSide, FaRoute, FaMountain } from "react-icons/fa";
import { usePricingModal } from "../components/PricingModalProvider";
// ⬅ IMPORTANT

export default function PricingDetails() {
  const [activeTab, setActiveTab] = useState("local");

  // Access the Pricing Modal from global modal context
  const { openPricingModal } = usePricingModal(); // ⬅ FIX

  // ---------------------------------------------------------------------------
  // DATA SECTION — You can add new items easily
  // ---------------------------------------------------------------------------
  const localRides = [
    { title: "4 Hours / 40 Km", price: "₹800", desc: "Short trips inside the city." },
    { title: "8 Hours / 80 Km", price: "₹1500", desc: "Full-day comfortable travel." },
    { title: "Raipur Airport Drop", price: "₹3500", desc: "Private airport transfer." },
  ];

  const cityRoutes = [
    { route: "Korba → Bilaspur", oneWay: "₹1200", roundTrip: "₹2000" },
    { route: "Korba → Raipur", oneWay: "₹3500", roundTrip: "₹5000" },
    { route: "Korba → Raigarh", oneWay: "₹1600", roundTrip: "₹2800" },
    { route: "Korba → Champa", oneWay: "₹1100", roundTrip: "₹1900" },
  ];

  const touristPackages = [
    { place: "Mainpat Hill Station", price: "₹4500", desc: "Beautiful 1-day hill tour." },
    { place: "Amarkantak Temple", price: "₹5500", desc: "Holy pilgrimage site." },
    { place: "Chaiturgarh Fort", price: "₹3500", desc: "Trekking & exploration tour." },
  ];

  // ---------------------------------------------------------------------------
  // TAB BUTTON COMPONENT
  // ---------------------------------------------------------------------------
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition border border-[#FF6A00]/40 whitespace-nowrap ${activeTab === id ? "bg-[#FF6A00] text-black" : "text-[#FF6A00] hover:bg-[#FF6A00]/20"} `}
    >
      <Icon size={16} /> {label}
    </button>
  );

  // ---------------------------------------------------------------------------
  // MAIN UI LAYOUT
  // ---------------------------------------------------------------------------
  return (
    <main className="min-h-screen bg-[#0F0F17] text-white px-4 pt-[120px] pb-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FF6A00] leading-tight">
            Pricing Details
          </h1>

          <p className="text-gray-400 mt-2 text-base sm:text-lg">
            Explore transparent pricing for rides, routes & tourist packages.
          </p>

          <Link
            href="/"
            className="inline-block mt-6 px-4 py-2 border border-[#FF6A00]/40 text-[#FF6A00] rounded-full hover:bg-[#FF6A00] hover:text-black transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* TAB BUTTONS */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <TabButton id="local" label="Local Rides" icon={FaCarSide} />
          <TabButton id="routes" label="City Routes" icon={FaRoute} />
          <TabButton id="tour" label="Tourist Packages" icon={FaMountain} />
        </div>

        {/* LOCAL RIDES */}
        {activeTab === "local" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {localRides.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#151522] p-6 rounded-2xl border border-[#FF6A00]/20 shadow-lg hover:border-[#FF6A00] transition"
              >
                <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                <p className="text-[#FF6A00] text-2xl font-bold mt-4">{item.price}</p>

                <button
                  onClick={() => openPricingModal(item)}  // ⬅ FIX
                  className="mt-4 px-5 py-2 text-sm font-semibold text-[#FF6A00] border border-[#FF6A00]/40 rounded-full w-full hover:bg-[#FF6A00]hover:text-black transition active:scale-95"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}

        {/* CITY ROUTES */}
        {activeTab === "routes" && (
          <div className="overflow-x-auto rounded-xl border border-[#FF6A00]/20 animate-fadeIn">
            <table className="w-full text-left bg-[#151522] text-sm sm:text-base">
              <thead className="bg-[#1B1B2F] text-gray-300">
                <tr>
                  <th className="p-4">Route</th>
                  <th className="p-4">One Way</th>
                  <th className="p-4">Round Trip</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cityRoutes.map((r, idx) => (
                  <tr key={idx} className="border-t border-white/10">
                    <td className="p-4">{r.route}</td>
                    <td className="p-4 text-[#FF6A00]">{r.oneWay}</td>
                    <td className="p-4 text-[#FF6A00]">{r.roundTrip}</td>
                    <td className="p-4">
                      <button
                        onClick={() => openPricingModal(r)} // ⬅ FIX
                        className="px-4 py-1 rounded-full text-sm text-[#FF6A00] border border-[#FF6A00]/40 hover:bg-[#FF6A00] hover:text-black transition"
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TOUR PACKAGES */}
        {activeTab === "tour" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {touristPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-[#151522] p-6 rounded-2xl border border-[#FF6A00]/20 shadow-lg hover:border-[#FF6A00] transition"
              >
                <h3 className="text-lg sm:text-xl font-bold">{pkg.place}</h3>
                <p className="text-gray-400 text-sm mt-1">{pkg.desc}</p>
                <p className="text-[#FF6A00] text-2xl font-bold mt-4">{pkg.price}</p>

                <button
                  onClick={() => openPricingModal(pkg)} // ⬅ FIX
                  className="mt-4 px-5 py-2 rounded-full w-full text-sm font-semibold text-[#FF6A00] border border-[#FF6A00]/40 hover:bg-[#FF6A00] hover:text-black transition active:scale-95"
                >
                  Book Trip
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
