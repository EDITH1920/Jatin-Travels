"use client";

import { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

const FORM_STORAGE_KEY = "jt_booking_form";

export default function BookingModal({ isOpen, onClose, initialService = "" }) {
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

  const cityList = ["Korba", "Bilaspur", "Raipur", "Champa", "Janjgir", "Katghora", "Pendra", "Ambikapur", "Raigarh"];
  const vehicles = ["Dzire", "Ertiga", "Innova"];

  /* ---------------- RESTORE ON OPEN ---------------- */
  useEffect(() => {
    if (isOpen) {
      const savedPhone = localStorage.getItem("jt_phone");
      const savedForm = localStorage.getItem(FORM_STORAGE_KEY);

      if (savedForm) setForm(JSON.parse(savedForm));
      if (savedPhone) setForm((f) => ({ ...f, phone: savedPhone }));

      setServiceLabel(initialService || "");
      setLoading(false);
      setSubmitted(false);
    }
  }, [isOpen, initialService]);

  /* ---------------- AUTO SAVE ---------------- */
  useEffect(() => {
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  /* ---------------- CLOSE HANDLERS ---------------- */
  useEffect(() => {
    const handler = (e) => modalRef.current && !modalRef.current.contains(e.target) && onClose();
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  /* ---------------- HAPTIC ---------------- */
  const triggerHaptic = () => {
    if (navigator.vibrate) navigator.vibrate(30);
  };

  /* ---------------- INPUT HANDLERS ---------------- */
  const handlePickupTyping = (value) => {
    setForm((f) => ({ ...f, pickup: value }));
    if (value.length < 2) return setCitySuggestions([]);
    setCitySuggestions(cityList.filter((c) => c.toLowerCase().startsWith(value.toLowerCase())));
  };

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

  /* ---------------- VALIDATION ---------------- */
  const validateForm = () => {
    const errs = {};
    if (!form.name) errs.name = "Name required";
    if (!/^\d{10}$/.test(form.phone)) errs.phone = "Valid phone required";
    if (!form.pickup) errs.pickup = "Pickup required";
    if (!form.drop) errs.drop = "Drop required";
    if (!form.date) errs.date = "Date required";
    if (!form.vehicle) errs.vehicle = "Vehicle required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  /* ---------------- SUBMIT (iOS SAFE) ---------------- */
  const submitBooking = () => {
    if (!validateForm()) return;

    triggerHaptic();
    setLoading(true);

    localStorage.setItem("jt_phone", form.phone);
    localStorage.removeItem(FORM_STORAGE_KEY);

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

    window.location.href = `https://wa.me/919179053619?text=${encodeURIComponent(message)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div ref={modalRef} className="bg-[#1B1B2F] rounded-2xl w-full max-w-md p-8 border border-[#FF6A00]/30 shadow-xl relative">

        {loading && <div className="absolute top-0 left-0 w-full h-1 bg-[#FF6A00]/30"><div className="h-full w-1/2 bg-[#FF6A00] animate-pulse"></div></div>}

        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-white hover:text-[#FF6A00]">
          <FiX />
        </button>

        <h2 className="text-2xl font-bold text-[#FF6A00] text-center mb-4">
          {submitted ? "Booking Sent!" : "Book Your Ride"}
        </h2>

        <input name="name" placeholder="Your Name" value={form.name} onChange={updateField} className="input-style" />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={updateField} className="input-style" />

        <input name="pickup" placeholder="Pickup City" value={form.pickup} onChange={(e) => handlePickupTyping(e.target.value)} className="input-style" />
        {citySuggestions.map((c) => (
          <button key={c} onClick={() => setForm((f) => ({ ...f, pickup: c }))} className="block w-full text-left px-3 py-2 hover:bg-[#FF6A00]/20">{c}</button>
        ))}

        <input name="drop" placeholder="Drop Location" value={form.drop} onChange={updateField} className="input-style" />

        <div className="flex gap-2 mt-2">
          <input type="date" name="date" value={form.date} onChange={updateField} className="input-style flex-1" />
          <select name="timeHour" value={form.timeHour} onChange={updateField} className="input-style w-20">
            {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map((h) => <option key={h}>{h}</option>)}
          </select>
          <select name="timeMinute" value={form.timeMinute} onChange={updateField} className="input-style w-20">
            {Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0")).map((m) => <option key={m}>{m}</option>)}
          </select>
          <select name="ampm" value={form.ampm} onChange={updateField} className="input-style w-20">
            <option>AM</option><option>PM</option>
          </select>
        </div>

        <input name="passengers" placeholder="Passengers (optional)" value={form.passengers} onChange={updateField} className="input-style" />

        <p className="text-gray-300 mt-3">Select Vehicle</p>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {vehicles.map((v) => (
            <button key={v} onClick={() => setForm((f) => ({ ...f, vehicle: v }))} className={`py-2 rounded-lg border ${form.vehicle === v ? "border-[#FF6A00] bg-[#FF6A00]/20" : "border-gray-600"}`}>
              {v}
            </button>
          ))}
        </div>

        <button onClick={submitBooking} disabled={loading} className="bg-[#FF6A00] hover:bg-[#E85B00] text-white w-full py-3 rounded-xl font-bold mt-6 flex justify-center items-center gap-2">
          {loading ? <><FaSpinner className="animate-spin" /> Redirecting…</> : "Send Booking Request"}
        </button>

      </div>
    </div>
  );
}
