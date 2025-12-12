"use client";

import { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

export default function BookingModal({ isOpen, onClose, initialService = "" }) {
  // ------------------------------
  // HOOKS
  // ------------------------------
  const modalRef = useRef(null);

  const [serviceLabel, setServiceLabel] = useState(initialService);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    timeHour: "09",
    timeMinute: "00",
    ampm: "AM",
    passengers: "",
    vehicle: "",
  });

  const [errors, setErrors] = useState({});
  const [citySuggestions, setCitySuggestions] = useState([]);

  const cityList = [
    "Korba",
    "Bilaspur",
    "Raipur",
    "Champa",
    "Janjgir",
    "Katghora",
    "Pendra",
    "Ambikapur",
    "Raigarh",
  ];

  const vehicles = ["Dzire", "Ertiga", "Innova"];

  // ------------------------------
  // On modal open - restore phone
  // ------------------------------
  useEffect(() => {
    if (isOpen) {
      const savedPhone = localStorage.getItem("jt_phone");
      if (savedPhone) {
        setForm((f) => ({ ...f, phone: savedPhone }));
      }
      setServiceLabel(initialService || "");
      setLoading(false);
      setSubmitted(false);
    }
  }, [isOpen, initialService]);

  // ------------------------------
  // Outside click / ESC close
  // ------------------------------
  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // ------------------------------
  // City suggestions (pickup)
  // ------------------------------
  const handlePickupTyping = (value) => {
    setForm((f) => ({ ...f, pickup: value }));
    if (value.length < 2) {
      setCitySuggestions([]);
      return;
    }
    const matches = cityList.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setCitySuggestions(matches);
  };

  // ------------------------------
  // Generic field update (with sanitization for specific fields)
  // ------------------------------
  const updateField = (e) => {
    const { name, value } = e.target;

    // sanitize phone: keep digits only and max 10 chars
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: digits }));
      setErrors((prev) => ({ ...prev, phone: "" }));
      return;
    }

    // sanitize passengers: digits only
    if (name === "passengers") {
      const digits = value.replace(/\D/g, "");
      setForm((prev) => ({ ...prev, passengers: digits }));
      setErrors((prev) => ({ ...prev, passengers: "" }));
      return;
    }

    // normal
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ------------------------------
  // Validation
  // ------------------------------
  const validateForm = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone))
      errs.phone = "Phone must be 10 digits";
    if (!form.pickup.trim()) errs.pickup = "Pickup location is required";
    if (!form.drop.trim()) errs.drop = "Drop location is required";
    if (!form.date) errs.date = "Please select date";
    if (!form.timeHour || !form.timeMinute) errs.time = "Please select time";
    if (!form.vehicle) errs.vehicle = "Please select a vehicle";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // ------------------------------
  // Submit
  // ------------------------------
  const submitBooking = () => {
    if (!validateForm()) return;

    setLoading(true);

    // Keep phone for next time
    localStorage.setItem("jt_phone", form.phone);

    // Save booking history (simple)
    const history = JSON.parse(localStorage.getItem("jt_history") || "[]");
    history.push({
      time: new Date().toLocaleString(),
      pickup: form.pickup,
      drop: form.drop,
      vehicle: form.vehicle,
    });
    localStorage.setItem("jt_history", JSON.stringify(history));

    setTimeout(() => {
      const finalTime = `${form.timeHour}:${form.timeMinute} ${form.ampm}`;
      const message = `Hi Jatin Travels, I want to book a cab.
Service: ${serviceLabel || "General"}
Name: ${form.name}
Phone: ${form.phone}
Pickup: ${form.pickup}
Drop: ${form.drop}
Date: ${form.date}
Time: ${finalTime}
Passengers: ${form.passengers}
Vehicle: ${form.vehicle}`;

      const url = `https://wa.me/919179053619?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");

      setLoading(false);
      setSubmitted(true);

      setTimeout(() => onClose(), 900);
    }, 1100);
  };

  if (!isOpen) return null;

  // ------------------------------
  // Helpers: render hour/min options
  // ------------------------------
  const hourOptions = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    return String(num).padStart(2, "0"); // "01" .. "12"
  });

  const minuteOptions = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  ); // "00" .. "59"

  // ------------------------------
  // Render UI
  // ------------------------------
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-999 flex items-center justify-center px-4">
      <div
        ref={modalRef}
        className="bg-[#1B1B2F] rounded-2xl w-full max-w-md p-8 border border-[#FF6A00]/30 shadow-xl animate-modal-fade relative"
      >
        {/* close btn */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-[#FF6A00]"
          aria-label="Close booking modal"
        >
          <FiX />
        </button>

        <h2 className="text-2xl font-bold text-[#FF6A00] mb-4 text-center">
          {submitted ? "Booking Sent!" : "Book Your Ride"}
        </h2>

        {submitted ? (
          <p className="text-gray-300 text-center">Redirecting to WhatsApp…</p>
        ) : (
          <>
            {/* Name */}
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={updateField}
              className={`input-style ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="err">{errors.name}</p>}

            {/* Phone */}
            <input
              name="phone"
              placeholder="Phone Number (10 digits)"
              value={form.phone}
              onChange={updateField}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              className={`input-style ${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && <p className="err">{errors.phone}</p>}

            {/* Pickup with suggestions */}
            <input
              name="pickup"
              placeholder="Pickup City"
              value={form.pickup}
              onChange={(e) => handlePickupTyping(e.target.value)}
              className={`input-style ${errors.pickup ? "border-red-500" : ""}`}
            />
            {citySuggestions.length > 0 && (
              <div className="bg-[#2A2A35] rounded-lg mt-1 overflow-hidden border border-[#FF6A00]/20">
                {citySuggestions.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setForm((f) => ({ ...f, pickup: city }));
                      setCitySuggestions([]);
                    }}
                    className="block w-full text-left px-3 py-2 hover:bg-[#FF6A00]/20"
                    type="button"
                  >
                    {city}
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
              className={`input-style ${errors.drop ? "border-red-500" : ""}`}
            />
            {errors.drop && <p className="err">{errors.drop}</p>}

            {/* Date + Time (Hour/Minute/AMPM) */}
            {/* DATE + TIME FIXED RESPONSIVE LAYOUT */}
<div className="w-full flex flex-col sm:flex-row gap-3 mt-2">

  {/* DATE */}
  <input
    type="date"
    name="date"
    value={form.date}
    onChange={updateField}
    className={`input-style flex-1 min-w-0 ${errors.date && "border-red-500"}`}
  />

  {/* TIME */}
  <div className="flex gap-2 flex-1 min-w-0">

    {/* HOUR */}
    <select
      name="timeHour"
      value={form.timeHour}
      onChange={updateField}
      className={`input-style flex-1 min-w-[70px] text-center ${
        errors.time && "border-red-500"
      }`}
    >
      {hourOptions.map((h) => (
        <option key={h}>{h}</option>
      ))}
    </select>

    {/* MINUTE */}
    <select
      name="timeMinute"
      value={form.timeMinute}
      onChange={updateField}
      className={`input-style flex-1 min-w-[70px] text-center ${
        errors.time && "border-red-500"
      }`}
    >
      {minuteOptions.map((m) => (
        <option key={m}>{m}</option>
      ))}
    </select>

    {/* AM / PM */}
    <select
      name="ampm"
      value={form.ampm}
      onChange={updateField}
      className="input-style w-20 text-center"
    >
      <option>AM</option>
      <option>PM</option>
    </select>
  </div>
</div>
{errors.time && <p className="err">{errors.time}</p>}

            {errors.date && <p className="err">{errors.date}</p>}
            {errors.time && <p className="err">{errors.time}</p>}

            {/* Passengers - number only */}
            <input
              name="passengers"
              placeholder="Passengers (optional)"
              type="number"
              inputMode="numeric"
              value={form.passengers}
              onChange={updateField}
              className="input-style"
            />

            {/* Vehicle selection */}
            <p className="text-gray-300 mt-3">Select Vehicle</p>
            <div className="grid grid-cols-3 gap-3 mt-2">
              {vehicles.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, vehicle: v }))}
                  className={`rounded-lg py-2 border transition text-left px-3 ${
                    form.vehicle === v
                      ? "border-[#FF6A00] bg-[#FF6A00]/20"
                      : "border-gray-600 hover:border-[#FF6A00]"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
            {errors.vehicle && <p className="err">{errors.vehicle}</p>}

            {/* Submit */}
            <button
              onClick={submitBooking}
              disabled={loading}
              className="bg-[#FF6A00] hover:bg-[#E85B00] text-white w-full py-3 rounded-xl font-bold mt-5 flex justify-center items-center"
              type="button"
            >
              {loading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                "Send Booking Request"
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
