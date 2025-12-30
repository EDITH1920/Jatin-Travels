"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaCarSide,
  FaRoute,
  FaMountain,
  FaExchangeAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePricingModal } from "../components/PricingModalProvider";

export default function PricingClient() {
  const [activeTab, setActiveTab] = useState("local");
  const { openPricingModal } = usePricingModal();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  // ---------------------------------------------------------------------------
  // LOCAL RIDES
  // ---------------------------------------------------------------------------
  const localRides = [
    { vehicle: "Dzire", hours: "8 Hours", km: "80 Km", extraHour: "₹150 / Hour", extraKm: "₹12 / Km", price: "₹1800" },
    { vehicle: "Ertiga", hours: "8 Hours", km: "80 Km", extraHour: "₹200 / Hour", extraKm: "₹14 / Km", price: "₹2200" },
    { vehicle: "Innova", hours: "8 Hours", km: "80 Km", extraHour: "₹250 / Hour", extraKm: "₹16 / Km", price: "₹3300" },
  ];

  // ---------------------------------------------------------------------------
  // CITY ROUTES (ONE WAY)
  // ---------------------------------------------------------------------------
  const cityRoutes = [
    { from: "Korba", to: "Bilaspur", five: 1800, innova: 2500, distance: "110 km", eta: "2.5 hrs" },
    { from: "Korba", to: "Raipur", five: 3500, innova: 6000, distance: "200 km", eta: "4.5 hrs" },
    { from: "Korba", to: "Raigarh", five: 2500, innova: 3500, distance: "150 km", eta: "3.5 hrs" },
    { from: "Korba", to: "Kharsia", five: 2200, innova: 3500, distance: "135 km", eta: "3 hrs" },
    { from: "Korba", to: "Champa", five: 1200, innova: 2000, distance: "70 km", eta: "1.5 hrs" },
    { from: "Korba", to: "Jharsuguda", five: 4500, innova: 5500, distance: "240 km", eta: "5 hrs" },
    { from: "Korba", to: "Bhilai", five: 4000, innova: 7500, distance: "215 km", eta: "4.5 hrs" },
    { from: "Korba", to: "Durg", five: 4300, innova: 7500, distance: "215 km", eta: "4.5 hrs" },
    { from: "Korba", to: "Dhamtari", five: 5000, innova: 8000, distance: "260 km", eta: "5.5 hrs" },

    { from: "Bilaspur", to: "Korba", five: 1800, innova: 3000, distance: "110 km", eta: "2.5 hrs" },
    { from: "Bilaspur", to: "Raipur", five: 1800, innova: 3000, distance: "120 km", eta: "3 hrs" },
    { from: "Bilaspur", to: "Raigarh", five: 2500, innova: 4000, distance: "150 km", eta: "3.5 hrs" },
    { from: "Bilaspur", to: "Jharsuguda", five: 4500, innova: 6000, distance: "260 km", eta: "5.5 hrs" },
    { from: "Bilaspur", to: "Champa", five: 1500, innova: 3000, distance: "90 km", eta: "2 hrs" },
    { from: "Bilaspur", to: "Bhilai", five: 2500, innova: 5000, distance: "130 km", eta: "3 hrs" },
    { from: "Bilaspur", to: "Durg", five: 2700, innova: 5000, distance: "130 km", eta: "3 hrs" },
    { from: "Bilaspur", to: "Dhamtari", five: 3500, innova: 5500, distance: "180 km", eta: "4 hrs" },

    { from: "Raipur", to: "Bilaspur", five: 1800, innova: 3000, distance: "120 km", eta: "3 hrs" },
    { from: "Raipur", to: "Korba", five: 3500, innova: 6000, distance: "200 km", eta: "4.5 hrs" },
    { from: "Raipur", to: "Raigarh", five: 3500, innova: 6000, distance: "255 km", eta: "5 hrs" },
    { from: "Raipur", to: "Kharsia", five: 3500, innova: 6000, distance: "240 km", eta: "5 hrs" },
    { from: "Raipur", to: "Champa", five: 3000, innova: 6000, distance: "210 km", eta: "4.5 hrs" },
    { from: "Raipur", to: "Jharsuguda", five: 5500, innova: 8500, distance: "320 km", eta: "6.5 hrs" },
    { from: "Raipur", to: "Bhilai", five: 1000, innova: 2000, distance: "35 km", eta: "1 hr" },
    { from: "Raipur", to: "Durg", five: 1200, innova: 2000, distance: "35 km", eta: "1 hr" },
    { from: "Raipur", to: "Dhamtari", five: 2000, innova: 3000, distance: "80 km", eta: "2 hrs" },
  ];

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  // ---------------------------------------------------------------------------
  // TOUR FORM
  // ---------------------------------------------------------------------------
  const [tourForm, setTourForm] = useState({
    pickup: "",
    place: "",
    vehicle: "",
    note: "",
  });

  const handleSwap = () => {
    if (!pickup || !drop) return;
    setPickup(drop);
    setDrop(pickup);
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition border border-[#FF6A00]/40 ${
        activeTab === id
          ? "bg-[#FF6A00] text-black"
          : "text-[#FF6A00] hover:bg-[#FF6A00]/20"
      }`}
    >
      <Icon size={16} /> {label}
    </button>
  );

  return (
    <main className="min-h-screen bg-[#0F0F17] text-white px-4 pt-[120px] pb-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-8" data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FF6A00]">
            Pricing Details
          </h1>
          <p className="text-gray-400 mt-2">
            Transparent pricing & custom trip enquiries
          </p>
          <Link
            href="/"
            className="inline-block mt-4 border border-[#FF6A00]/40 px-4 py-2 rounded-full hover:bg-[#FF6A00] hover:text-black transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* TABS */}
        <div className="flex gap-3 mb-8 overflow-x-auto" data-aos="fade-up">
          <TabButton id="local" label="Local Rides" icon={FaCarSide} />
          <TabButton id="routes" label="City Routes" icon={FaRoute} />
          <TabButton id="tour" label="Tourist Packages" icon={FaMountain} />
        </div>

        {/* CITY ROUTES */}
        {activeTab === "routes" && (
          <div data-aos="fade-up" className="bg-[#151522] p-6 rounded-2xl max-w-3xl">
            <h2 className="text-xl font-bold mb-4 text-[#FF6A00]">
              City Routes <span className="text-sm text-gray-400">(One Way)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3">
              <select
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                  setDrop("");
                }}
                className="p-3 bg-[#0F0F17] rounded-lg border border-white/10"
              >
                <option value="">Pickup City</option>
                {[...new Set(cityRoutes.map(r => r.from))].map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <button
                onClick={handleSwap}
                className="p-2 border border-[#FF6A00]/40 rounded-full hover:bg-[#FF6A00] hover:text-black transition"
              >
                <FaExchangeAlt />
              </button>

              <select
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                disabled={!pickup}
                className="p-3 bg-[#0F0F17] rounded-lg border border-white/10"
              >
                <option value="">Drop City</option>
                {[...new Set(
                  cityRoutes.filter(r => r.from === pickup).map(r => r.to)
                )].map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {pickup && drop && pickup !== drop && (() => {
              const r = cityRoutes.find(x => x.from === pickup && x.to === drop);
              if (!r) return null;

              const ertiga = r.five + 500;

              return (
                <div className="mt-6 p-5 rounded-xl border border-[#FF6A00]/30 bg-[#0F0F17]">
                  <p className="text-sm text-gray-300 mb-3">
                    📏 {r.distance} &nbsp;|&nbsp; ⏱ {r.eta}
                  </p>

                  <div className="space-y-3">
                    <button
                      onClick={() => openPricingModal({ route: `${pickup} → ${drop}`, vehicle: "5 Seater", price: r.five })}
                      className="w-full flex justify-between items-center p-4 rounded-lg border border-[#FF6A00]/30 hover:bg-[#FF6A00] hover:text-black transition"
                    >
                      <span>🚗 5 Seater</span>
                      <span className="font-bold">₹{r.five}</span>
                    </button>

                    <button
                      onClick={() => openPricingModal({ route: `${pickup} → ${drop}`, vehicle: "Ertiga (7 Seater)", price: ertiga })}
                      className="w-full flex justify-between items-center p-4 rounded-lg border border-[#FF6A00]/30 hover:bg-[#FF6A00] hover:text-black transition"
                    >
                      <span>🚙 Ertiga (7 Seater)</span>
                      <span className="font-bold">₹{ertiga}</span>
                    </button>

                    <button
                      onClick={() => openPricingModal({ route: `${pickup} → ${drop}`, vehicle: "Innova (7 Seater)", price: r.innova })}
                      className="w-full flex justify-between items-center p-4 rounded-lg border border-[#FF6A00]/30 hover:bg-[#FF6A00] hover:text-black transition"
                    >
                      <span>🚐 Innova (7 Seater)</span>
                      <span className="font-bold">₹{r.innova}</span>
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 mt-4">
                    ℹ️ Round trip pricing depends on duration & halt time.
                  </p>
                </div>
              );
            })()}
          </div>
        )}

        {/* TOURIST PACKAGE FORM */}
        {activeTab === "tour" && (
          <form
            data-aos="fade-up"
            className="bg-[#151522] p-6 rounded-2xl max-w-xl space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              openPricingModal({ ...tourForm, type: "Tour Enquiry" });
            }}
          >
            <h2 className="text-xl font-bold text-[#FF6A00]">
              Tourist Trip Enquiry
            </h2>

            <input
              placeholder="Pickup Location"
              className="w-full p-3 bg-[#0F0F17] rounded border border-white/10"
              onChange={(e) => setTourForm({ ...tourForm, pickup: e.target.value })}
            />

            <input
              placeholder="Tourist Place"
              className="w-full p-3 bg-[#0F0F17] rounded border border-white/10"
              onChange={(e) => setTourForm({ ...tourForm, place: e.target.value })}
            />

            <select
              className="w-full p-3 bg-[#0F0F17] rounded border border-white/10"
              onChange={(e) => setTourForm({ ...tourForm, vehicle: e.target.value })}
            >
              <option value="">Select Vehicle</option>
              <option>Dzire</option>
              <option>Ertiga</option>
              <option>Innova</option>
            </select>

            <textarea
              placeholder="Additional note (optional)"
              className="w-full p-3 bg-[#0F0F17] rounded border border-white/10"
              onChange={(e) => setTourForm({ ...tourForm, note: e.target.value })}
            />

            <button className="w-full bg-[#FF6A00] text-black py-3 rounded font-semibold hover:opacity-90 transition">
              Request Quote
            </button>
          </form>
        )}

        {/* LOCAL RIDES */}
        {activeTab === "local" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
            {localRides.map((i, idx) => (
              <div
                key={idx}
                className="bg-[#151522] p-6 rounded-2xl border border-white/10 hover:border-[#FF6A00]/40 transition"
              >
                <h3 className="text-[#FF6A00] font-bold text-lg">
                  {i.vehicle}
                </h3>

                <p className="text-sm text-gray-300 mt-2">
                  ⏱ {i.hours} &nbsp;|&nbsp; 📏 {i.km}
                </p>

                <p className="mt-4 text-2xl font-bold text-[#FF6A00]">
                  {i.price}
                </p>

                <button
                  onClick={() => openPricingModal(i)}
                  className="mt-4 w-full border border-[#FF6A00]/40 py-2 rounded hover:bg-[#FF6A00] hover:text-black transition"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
