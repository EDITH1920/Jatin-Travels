"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-24 md:bottom-6 z-50 flex flex-col items-end gap-3">

      {/* WhatsApp Button (PRIMARY) */}
      <a
        href="https://wa.me/919179053619"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Jatin Travels on WhatsApp"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-3 rounded-full shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <FaWhatsapp size={22} />
        <span className="font-semibold hidden sm:inline">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button (SECONDARY) */}
      <a
        href="tel:+919179053619"
        aria-label="Call Jatin Travels"
        className="flex items-center justify-center bg-[#FF6A00] hover:bg-[#E85B00] text-white w-12 h-12 rounded-full shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <FaPhoneAlt size={18} />
      </a>

    </div>
  );
}
