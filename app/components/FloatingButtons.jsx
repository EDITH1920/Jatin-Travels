"use client";

import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end gap-4 z-50">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919179053619"
        target="_blank"
        className="group flex items-center gap-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.03] duration-300 cursor-pointer"
      >
        <div className="bg-green-600 p-3 rounded-full shadow-md group-hover:bg-green-700 duration-300">
          <FaWhatsapp size={20} />
        </div>

        {/* <span className="font-semibold tracking-wide">
          WhatsApp Us
        </span> */}
      </a>

      {/* Call Button */}
      <a
        href="tel:+919179053619"
        className="relative bg-white/20 backdrop-blur-lg border border-white/30 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.05] duration-300 cursor-pointer"
      >
        <div className="bg-orange-500 p-3 rounded-full shadow-md hover:bg-orange-600 duration-300">
          <FaPhoneAlt size={20} />
        </div>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 duration-300 whitespace-nowrap">
          Call Now
        </span>
      </a>

    </div>
  );
};

export default FloatingButtons;
