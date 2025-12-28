"use client";

import { useState, useRef, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

export default function HeroBookingModal({ isOpen, onClose, data }) {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const close = (e) =>
      modalRef.current && !modalRef.current.contains(e.target) && onClose();
    if (isOpen) document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  const submit = () => {
    if (!name || phone.length !== 10) return;

    setLoading(true);

    const msg = `🚖 *Jatin Travels – Cab Booking Request*

📍 Route: ${data.pickup} → ${data.drop}
🚗 Vehicle: ${data.vehicle}
📏 Distance: ${data.distance}
⏱ ETA: ${data.eta}
💰 Fare: ₹${data.price}

👤 Name: ${name}
📞 Phone: ${phone}

Please confirm booking.`;

    window.open(`https://wa.me/919179053619?text=${encodeURIComponent(msg)}`, "_blank");
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-999 flex items-center justify-center px-4">
      <div ref={modalRef} className="bg-[#1B1B2F] p-6 rounded-2xl w-full max-w-md border border-[#FF6A00]/30">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">
          <FiX />
        </button>

        <h2 className="text-xl text-center font-bold text-[#FF6A00] mb-4">
          Confirm Booking
        </h2>

        <input placeholder="Your Name" className="input-style mb-3" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Phone Number" className="input-style mb-4" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} />

        <button onClick={submit} disabled={loading} className="w-full py-3 rounded-xl bg-[#FF6A00] text-black font-bold">
          {loading ? <FaSpinner className="animate-spin" /> : "Confirm via WhatsApp"}
        </button>
      </div>
    </div>
  );
}
