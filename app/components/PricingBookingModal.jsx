"use client";

import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

/* -------------------------------------------------------------------
   STATIC ROUTE DATA (AUTO DISTANCE DETECTION)
   Add more routes inside here if needed
------------------------------------------------------------------- */
const ROUTE_DATA = {
  "Korba → Bilaspur": { distance: "90 km", estimatedTime: "2 hrs" },
  "Korba → Raipur": { distance: "200 km", estimatedTime: "4 hrs" },
  "Korba → Raigarh": { distance: "120 km", estimatedTime: "3 hrs" },
  "Korba → Champa": { distance: "45 km", estimatedTime: "1 hr" },
};

/* Popular pickup points */
const POPULAR_PICKUPS = [
  "Korba Bus Stand",
  "Korba Railway Station",
  "Korba Darri",
  "Korba Transport Nagar",
  "Korba Power House",
];

export default function PricingBookingModal({ isOpen, onClose, selectedPackage }) {
  const modalRef = useRef(null);

  // ------------------------------------
  // STATE
  // ------------------------------------
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    tripType: "One Way", // auto-selected
  });

  const [errors, setErrors] = useState({});
  const [pickupSuggestions, setPickupSuggestions] = useState([]);

  // Prefill route if coming from pricing section
  useEffect(() => {
    if (selectedPackage) {
      const title = selectedPackage.title || selectedPackage.route || selectedPackage.place;
      const isRoute = ROUTE_DATA[title];

      setForm((prev) => ({
        ...prev,
        pickup: isRoute ? "Korba" : "",
        drop: isRoute ? title.split("→")[1].trim() : "",
        tripType: selectedPackage.roundTrip ? "Round Trip" : "One Way",
      }));
    }
  }, [selectedPackage]);

  // Close modal on outside click
  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // ESC key close
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  // ------------------------------------
  // INPUT HANDLERS
  // ------------------------------------
  const updateField = (e) => {
    const { name, value } = e.target;

    // Phone — digits only
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setForm((f) => ({ ...f, phone: digits }));
      return;
    }

    if (name === "pickup") {
      setForm((f) => ({ ...f, pickup: value }));

      if (value.length < 2) {
        setPickupSuggestions([]);
      } else {
        setPickupSuggestions(
          POPULAR_PICKUPS.filter((p) =>
            p.toLowerCase().startsWith(value.toLowerCase())
          )
        );
      }
      return;
    }

    setForm((f) => ({ ...f, [name]: value }));
  };

  // ------------------------------------
  // VALIDATION
  // ------------------------------------
  const validate = () => {
    const err = {};

    if (!form.name.trim()) err.name = "Required";
    if (!/^\d{10}$/.test(form.phone)) err.phone = "Phone must be 10 digits";
    if (!form.pickup.trim()) err.pickup = "Pickup required";
    if (!form.drop.trim()) err.drop = "Drop required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // ------------------------------------
  // SUBMIT → SEND TO WHATSAPP
  // ------------------------------------
  const submitBooking = () => {
    if (!validate()) return;

    setLoading(true);

    const pkgName =
      selectedPackage.title ||
      selectedPackage.route ||
      selectedPackage.place ||
      "Custom Package";

    const routeInfo = ROUTE_DATA[pkgName];

    const distanceText = routeInfo
      ? `${routeInfo.distance} / ${routeInfo.estimatedTime}`
      : "N/A";

    const msg = `📌 *Booking Request (Pricing Package)*

Package: *${pkgName}*
Trip Type: *${form.tripType}*

👤 *Customer Details*
Name: ${form.name}
Phone: ${form.phone}

🚖 *Travel Details*
Pickup: ${form.pickup}
Drop: ${form.drop}
Distance: ${distanceText}

Please confirm availability.`;

    const url = `https://wa.me/919179053619?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => onClose(), 1200);
    }, 900);
  };

  if (!isOpen) return null;

  // ---------------------------------------------------------
  // COMPACT MOBILE UI + CLEAN DESKTOP UI
  // ---------------------------------------------------------
  return (
    <div className="fixed inset-0 bg-black/60 z-999 flex justify-center items-center px-4">
      <div
        ref={modalRef}
        className="bg-[#1B1B2F] w-full max-w-md rounded-2xl p-6 border border-[#FF6A00]/30 shadow-xl animate-modal-fade"
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-white text-2xl hover:text-[#FF6A00]"
          onClick={onClose}
        >
          <FiX />
        </button>

        <h2 className="text-xl font-bold text-[#FF6A00] text-center mb-4">
          {submitted ? "Booking Sent!" : "Confirm Your Booking"}
        </h2>

        {submitted ? (
          <p className="text-center text-gray-300">Redirecting to WhatsApp…</p>
        ) : (
          <>
            {/* Name */}
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={updateField}
              className={`input-style ${errors.name && "border-red-500"}`}
            />
            {errors.name && <p className="err">{errors.name}</p>}

            {/* Phone */}
            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={updateField}
              className={`input-style ${errors.phone && "border-red-500"}`}
            />
            {errors.phone && <p className="err">{errors.phone}</p>}

            {/* Pickup */}
            <input
              name="pickup"
              placeholder="Pickup Location"
              value={form.pickup}
              onChange={updateField}
              className={`input-style ${errors.pickup && "border-red-500"}`}
            />
            {pickupSuggestions.length > 0 && (
              <div className="bg-[#2A2A35] rounded-lg mt-1 border border-[#FF6A00]/20 overflow-hidden">
                {pickupSuggestions.map((p, i) => (
                  <button
                    key={i}
                    className="block w-full px-3 py-2 text-left hover:bg-[#FF6A00]/20"
                    onClick={() => {
                      setForm((f) => ({ ...f, pickup: p }));
                      setPickupSuggestions([]);
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
            {errors.pickup && <p className="err">{errors.pickup}</p>}

            {/* Drop */}
            <input
              name="drop"
              placeholder="Drop Location"
              value={form.drop}
              onChange={updateField}
              className={`input-style ${errors.drop && "border-red-500"}`}
            />
            {errors.drop && <p className="err">{errors.drop}</p>}

            {/* Trip Type */}
            <div className="mt-4">
              <p className="text-gray-300 text-sm mb-2">Trip Type</p>
              <div className="flex gap-3">
                {["One Way", "Round Trip"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setForm((f) => ({ ...f, tripType: t }))}
                    className={`px-4 py-2 rounded-full border text-sm${form.tripType === t ? "bg-[#FF6A00] text-black border-[#FF6A00]" : "text-[#FF6A00] border-[#FF6A00]/40 hover:bg-[#FF6A00]/20"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={submitBooking}
              disabled={loading}
              className="w-full mt-5 py-3 rounded-xl font-bold bg-[#FF6A00] hover:bg-[#E85B00] text-black flex justify-center items-center"
            >
              {loading ? <FaSpinner className="animate-spin" /> : "Confirm Booking"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
