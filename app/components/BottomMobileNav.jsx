"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaTaxi, FaPhoneAlt } from "react-icons/fa";

export default function BottomMobileNav() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-black/90 backdrop-blur-xl border-t border-white/10 md:hidden">
      <div className="flex justify-around items-center py-3 text-sm font-semibold text-white">
        
        {/* HOME */}
        <Link
          href="/"
          className={`flex flex-col items-center gap-1 transition ${
            isActive("/") ? "text-[#FF6A00]" : "text-white/80 hover:text-[#FF6A00]"
          }`}
        >
          <FaHome size={18} />
          Home
        </Link>

        {/* BOOK */}
        <button
          onClick={() =>
            window.dispatchEvent(new CustomEvent("openBookingModal"))
          }
          className="flex flex-col items-center gap-1 text-[#FF6A00] font-bold"
        >
          <FaTaxi size={20} />
          Book
        </button>

        {/* CONTACT */}
        <Link
          href="/contact"
          className={`flex flex-col items-center gap-1 transition ${
            isActive("/contact")
              ? "text-[#FF6A00]"
              : "text-white/80 hover:text-[#FF6A00]"
          }`}
        >
          <FaPhoneAlt size={18} />
          Contact
        </Link>
      </div>
    </div>
  );
}
