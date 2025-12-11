"use client";

import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919179053619"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
      >
        <FaWhatsapp size={20} />
        <span className="font-semibold hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919179053619"
        className="bg-[#FF6A00] hover:bg-[#E85B00] text-white p-4 rounded-full shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FaPhoneAlt size={20} />
      </a>

    </div>
  );
};

export default FloatingButtons;
