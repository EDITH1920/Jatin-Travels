"use client";

import { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

const FORM_STORAGE_KEY = "jt_booking_form";

export default function BookingModal({ isOpen, onClose, initialService = "" }) {
  const modalRef = useRef(null);
  const nameRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [serviceLabel, setServiceLabel] = useState(initialService);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    passengers: "",
    vehicle: "",
  });

  const [errors, setErrors] = useState({});
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);

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

  /* ---------------- RESTORE ON OPEN ---------------- */
  useEffect(() => {
    if (!isOpen) return;

    const savedForm = localStorage.getItem(FORM_STORAGE_KEY);
    const savedPhone = localStorage.getItem("jt_phone");

    if (savedForm) setForm(JSON.parse(savedForm));
    if (savedPhone) setForm((f) => ({ ...f, phone: savedPhone }));

    setServiceLabel(initialService || "Custom Booking");
    setErrors({});
    setLoading(false);

    if (!form.date) {
      setForm((f) => ({
        ...f,
        date: new Date().toISOString().split("T")[0],
      }));
    }

    setTimeout(() => nameRef.current?.focus(), 200);
  }, [isOpen, initialService]);

  /* ---------------- AUTO SAVE ---------------- */
  useEffect(() => {
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  /* ---------------- CLOSE HANDLERS ---------------- */
  useEffect(() => {
    const handler = (e) =>
      modalRef.current && !modalRef.current.contains(e.target) && onClose();
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  /* ---------------- INPUT HANDLERS ---------------- */
  const updateField = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setForm((f) => ({ ...f, phone: value.replace(/\D/g, "").slice(0, 10) }));
      return;
    }

    if (name === "passengers") {
      setForm((f) => ({ ...f, passengers: value.replace(/\D/g, "") }));
      return;
    }

    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleCityTyping = (value, type) => {
    setForm((f) => ({ ...f, [type]: value }));

    if (value.length < 2) {
      type === "pickup"
        ? setPickupSuggestions([])
        : setDropSuggestions([]);
      return;
    }

    const matches = cityList.filter((c) =>
      c.toLowerCase().startsWith(value.toLowerCase())
    );

    type === "pickup"
      ? setPickupSuggestions(matches)
      : setDropSuggestions(matches);
  };

  /* ---------------- VALIDATION ---------------- */
  const validateForm = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone)) errs.phone = "Valid phone required";
    if (!form.pickup) errs.pickup = "Pickup required";
    if (!form.drop) errs.drop = "Drop required";
    if (!form.date) errs.date = "Travel date required";
    if (!form.vehicle) errs.vehicle = "Select a vehicle";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  /* ---------------- SUBMIT ---------------- */
  const submitBooking = () => {
    if (!validateForm()) return;

    setLoading(true);

    localStorage.setItem("jt_phone", form.phone);
    localStorage.removeItem(FORM_STORAGE_KEY);

    const message = `Hi Jatin Travels,

I want to enquire for a *custom cab booking*.

Service Type: ${serviceLabel}
Name: ${form.name}
Phone: ${form.phone}
Pickup: ${form.pickup}
Drop: ${form.drop}
Travel Date: ${form.date}
Passengers: ${form.passengers || "Not specified"}
Preferred Vehicle: ${form.vehicle}

Please contact me for availability and pricing.`;

    window.location.href = `https://wa.me/919179053619?text=${encodeURIComponent(
      message
    )}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div
        ref={modalRef}
        className="bg-[#1B1B2F] rounded-2xl w-full max-w-md p-8 border border-[#FF6A00]/30 shadow-xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-white hover:text-[#FF6A00]"
        >
          <FiX />
        </button>

        <div className="text-center mb-5">
          <p className="text-xs text-gray-400">
            Custom Booking • Round Trip • Local • Special Requirements
          </p>
          <h2 className="text-2xl font-bold text-[#FF6A00] mt-1">
            Custom Cab Booking
          </h2>
        </div>

        <input
          ref={nameRef}
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={updateField}
          className="input-style"
        />
        {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={updateField}
          className="input-style"
        />
        {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}

        <input
          placeholder="Pickup City"
          value={form.pickup}
          onChange={(e) => handleCityTyping(e.target.value, "pickup")}
          className="input-style"
        />
        {pickupSuggestions.map((c) => (
          <button
            key={c}
            onClick={() => setForm((f) => ({ ...f, pickup: c }))}
            className="block w-full text-left px-3 py-2 hover:bg-[#FF6A00]/20"
          >
            {c}
          </button>
        ))}

        <input
          placeholder="Drop Location"
          value={form.drop}
          onChange={(e) => handleCityTyping(e.target.value, "drop")}
          className="input-style"
        />
        {dropSuggestions.map((c) => (
          <button
            key={c}
            onClick={() => setForm((f) => ({ ...f, drop: c }))}
            className="block w-full text-left px-3 py-2 hover:bg-[#FF6A00]/20"
          >
            {c}
          </button>
        ))}

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={updateField}
          className="input-style"
        />
        {errors.date && <p className="text-red-400 text-xs">{errors.date}</p>}

        <input
          name="passengers"
          placeholder="Passengers (optional)"
          value={form.passengers}
          onChange={updateField}
          className="input-style"
        />

        <p className="text-gray-300 mt-4 text-sm">Preferred Vehicle</p>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {vehicles.map((v) => (
            <button
              key={v}
              onClick={() => setForm((f) => ({ ...f, vehicle: v }))}
              className={`py-2 rounded-lg border ${
                form.vehicle === v
                  ? "border-[#FF6A00] bg-[#FF6A00]/20"
                  : "border-gray-600"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
        {errors.vehicle && (
          <p className="text-red-400 text-xs mt-1">{errors.vehicle}</p>
        )}

        <p className="text-xs text-gray-400 mt-4 text-center">
          Didn’t find a suitable option on the main booking?  
          Submit this form and we’ll assist you personally on WhatsApp.
        </p>

        <button
          onClick={submitBooking}
          disabled={loading}
          className="bg-[#FF6A00] hover:bg-[#E85B00] text-white w-full py-3 rounded-xl font-bold mt-4 flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" /> Redirecting…
            </>
          ) : (
            "Send Enquiry on WhatsApp"
          )}
        </button>
      </div>
    </div>
  );
}
