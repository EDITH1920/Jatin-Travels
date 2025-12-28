"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaChevronDown,
  FaPhoneAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBookingModal from "./HeroBookingModal";

/* ---------------- ALL ROUTES ---------------- */
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


/* ------------------------------------------------ */

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  /* IMAGE SLIDER */
  const images = ["/hero/dzire.png", "/hero/ertiga.png", "/hero/innova.png"];
  const [img, setImg] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setImg(p => (p + 1) % images.length), 3500);
    return () => clearInterval(i);
  }, []);

  /* BOOKING */
  const pickupCities = ["Korba", "Bilaspur", "Raipur"];
  const dropCities = [...new Set(cityRoutes.map(r => r.to))];

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [modalData, setModalData] = useState(null);

  const route = cityRoutes.find(r => r.from === pickup && r.to === drop);

  const price =
    route && vehicle === "5 Seater"
      ? route.five
      : route && vehicle === "Ertiga (7 Seater)"
      ? route.five + 500
      : route && vehicle === "Innova (7 Seater)"
      ? route.innova
      : null;

  const openModal = () => {
    if (!route || !price) return;
    setModalData({
      pickup,
      drop,
      vehicle,
      price,
      distance: route.distance,
      eta: route.eta,
    });
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-[#0F0F17] overflow-hidden"
      >
        {/* 🔥 GLOW LAYERS */}
        <div
          data-aos="fade"
          className="pointer-events-none absolute -top-52 -left-52 w-[620px] h-[620px] bg-[#FF6A00]/30 rounded-full blur-[140px] animate-pulse"
        />
        <div
          data-aos="fade"
          data-aos-delay="200"
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#FF6A00]/20 rounded-full blur-[120px]"
        />
        <div
          data-aos="fade"
          data-aos-delay="400"
          className="pointer-events-none absolute bottom-0 right-0 w-[520px] h-[520px] bg-[#FF6A00]/15 rounded-full blur-[150px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="space-y-8">
            <div
              data-aos="fade-right"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300"
            >
              <FaMapMarkerAlt className="text-[#FF6A00]" />
              Trusted Cab Services Across Chhattisgarh
            </div>

            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white "
            >
              Book Reliable & Comfortable
              <br />
              <span className="text-[#FF6A00]">
                Cab Services in Chhattisgarh
              </span>
            </h1>

            {/* BOOKING CARD */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-[#151522]/80 p-5 rounded-2xl border border-[#FF6A00]/20"
            >
              <p className="text-sm text-gray-300 mb-3">
                🚖 Instant Fare Estimation <span className="text-gray-400">(One Way)</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select className="input-style" onChange={e => setPickup(e.target.value)}>
                  <option value="">Pickup City</option>
                  {pickupCities.map(c => <option key={c}>{c}</option>)}
                </select>

                <select className="input-style" disabled={!pickup} onChange={e => setDrop(e.target.value)}>
                  <option value="">Drop City</option>
                  {dropCities.filter(c => c !== pickup).map(c => <option key={c}>{c}</option>)}
                </select>

                <select className="input-style sm:col-span-2" onChange={e => setVehicle(e.target.value)}>
                  <option value="">Select Vehicle</option>
                  <option>5 Seater</option>
                  <option>Ertiga (7 Seater)</option>
                  <option>Innova (7 Seater)</option>
                </select>
              </div>

              {price && (
                <div className="mt-4 text-sm text-gray-300">
                  💰 <b className="text-[#FF6A00]">₹{price}</b> · 📏 {route.distance} · ⏱ {route.eta}
                </div>
              )}

              <button
                onClick={openModal}
                disabled={!price}
                className="mt-4 w-full py-3 rounded-full bg-[#FF6A00] text-black font-bold"
              >
                Book Cab Now
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openBookingModal"))}
                className="mt-3 w-full py-3 rounded-full border border-[#FF6A00]/40 text-[#FF6A00] font-semibold hover:bg-[#FF6A00] hover:text-black transition"
              >
                Custom Booking (Round Trip / Local / Multiple Stops)
              </button>
            </div>

            {/* CTA BUTTONS */}
            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/919179053619"
                className="px-6 py-3 rounded-full border border-[#25D366]/50 text-[#25D366] font-semibold flex items-center gap-2 hover:bg-[#25D366] hover:text-black transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>

              <a
                href="tel:+919179053619"
                className="px-6 py-3 rounded-full border border-[#FF6A00]/40 text-white font-semibold flex items-center gap-2 hover:bg-[#FF6A00] hover:text-black transition"
              >
                <FaPhoneAlt /> Call Now
              </a>

              <Link
                href="/pricing-details"
                className="px-6 py-3 rounded-full border border-[#FF6A00]/40 text-[#FF6A00] font-semibold hover:bg-[#FF6A00] hover:text-black transition"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div data-aos="fade-left" className="relative w-[300px] sm:w-[380px] lg:w-[420px] aspect-4/5">
            <Image
              src={images[img]}
              fill
              priority
              className="object-cover rounded-3xl shadow-2xl"
              alt="Cab"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400">
          <FaChevronDown className="animate-bounce text-[#FF6A00]" />
        </div>
      </section>

      <HeroBookingModal
        isOpen={!!modalData}
        onClose={() => setModalData(null)}
        data={modalData}
      />
    </>
  );
}
