"use client";

import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

export default function PricingBookingModal({
  isOpen,
  onClose,
  selectedPackage,
}) {
  const modalRef = useRef(null);

  // --------------------------------------------------
  // STATE
  // --------------------------------------------------
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    vehicle: "",
    tripType: "One Way",
  });

  const [errors, setErrors] = useState({});

  // --------------------------------------------------
  // PREFILL FROM PricingDetails.jsx
  // --------------------------------------------------
  useEffect(() => {
    if (!selectedPackage) return;

    // Route based (City Routes)
    if (selectedPackage.route) {
      const [from, to] = selectedPackage.route.split("→").map(s => s.trim());

      setForm((f) => ({
        ...f,
        pickup: from || "",
        drop: to || "",
        vehicle: selectedPackage.vehicle || "",
        tripType: "One Way",
      }));
    }

    // Local rides
    if (selectedPackage.vehicle && !selectedPackage.route) {
      setForm((f) => ({
        ...f,
        vehicle: selectedPackage.vehicle,
      }));
    }
  }, [selectedPackage]);

  // --------------------------------------------------
  // CLOSE HANDLERS
  // --------------------------------------------------
  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // --------------------------------------------------
  // INPUT HANDLER
  // --------------------------------------------------
  const updateField = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setForm((f) => ({ ...f, phone: digits }));
      return;
    }

    setForm((f) => ({ ...f, [name]: value }));
  };

  // --------------------------------------------------
  // VALIDATION
  // --------------------------------------------------
  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Required";
    if (!/^\d{10}$/.test(form.phone)) err.phone = "Enter valid 10 digit number";
    if (!form.pickup.trim()) err.pickup = "Pickup required";
    if (!form.drop.trim()) err.drop = "Drop required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // --------------------------------------------------
  // SUBMIT → WHATSAPP
  // --------------------------------------------------
  const submitBooking = () => {
    if (!validate()) return;

    setLoading(true);

    const msg = `🚖 *Jatin Travels – Booking Request*

📍 *Route*
${form.pickup} → ${form.drop}

🚗 *Vehicle*
${form.vehicle || "Not specified"}

🧾 *Trip Type*
${form.tripType}

💰 *Price*
${selectedPackage?.price ? `₹${selectedPackage.price} (One Way)` : "Price will be shared after review"}

👤 *Customer Details*
Name: ${form.name}
Phone: ${form.phone}

📩 Please confirm availability.`;

    const url = `https://wa.me/919179053619?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
      setSubmitted(true);
      setTimeout(onClose, 1200);
    }, 800);
  };

  if (!isOpen) return null;

  // --------------------------------------------------
  // UI
  // --------------------------------------------------
  return (
    <div className="fixed inset-0 bg-black/60 z-999 flex justify-center items-center px-4">
      <div
        ref={modalRef}
        className="relative bg-[#1B1B2F] w-full max-w-md rounded-2xl p-6 border border-[#FF6A00]/30 shadow-xl"
      >
        {/* Close */}
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
          <p className="text-center text-gray-300">
            Redirecting to WhatsApp…
          </p>
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

            {/* Vehicle */}
            <input
              name="vehicle"
              placeholder="Vehicle Type"
              value={form.vehicle}
              onChange={updateField}
              className="input-style"
            />

            {/* Price display (if available) */}
            {selectedPackage?.price && (
              <div className="mt-3 text-sm text-gray-300 bg-[#0F0F17] p-3 rounded-lg border border-[#FF6A00]/20">
                💰 Estimated Price:{" "}
                <span className="font-bold text-[#FF6A00]">
                  ₹{selectedPackage.price} (One Way)
                </span>
              </div>
            )}

            {/* Submit */}
            <button
              onClick={submitBooking}
              disabled={loading}
              className="w-full mt-5 py-3 rounded-xl font-bold bg-[#FF6A00] hover:bg-[#E85B00] text-black flex justify-center items-center"
            >
              {loading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                "Confirm Booking"
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
