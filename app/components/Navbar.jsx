"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

/* ---------------- NAV CONFIG ---------------- */
const navItems = [
  { id: "home", label: "Home", type: "home" },
  { id: "modal", label: "Book a Ride", type: "modal" },
  { id: "services", label: "Services", type: "scroll" },
  { id: "pricing", label: "Pricing", type: "scroll" },
  { id: "reviews", label: "Reviews", type: "scroll" },
  { id: "/about", label: "About", type: "route" },
  { id: "/contact", label: "Contact", type: "route" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);
  const highlightRef = useRef(null);
  const navLinkRefs = useRef({});

  /* ---------------- SMOOTH SCROLL ---------------- */
  const smoothScrollTo = (y, duration = 700) => {
    const startY = window.scrollY;
    const diff = y - startY;
    let start;

    const ease = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      window.scrollTo(0, startY + diff * ease(p));
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  /* ---------------- CLICK HANDLER ---------------- */
  const handleNavClick = (item) => {
    if (item.type === "home") {
      window.location.href = "/";
      return;
    }

    if (item.type === "modal") {
      window.dispatchEvent(new CustomEvent("openBookingModal"));
      setMenuOpen(false);
      return;
    }

    if (item.type === "scroll") {
      const el = document.getElementById(item.id);
      if (!el) return;
      const offset = el.getBoundingClientRect().top + window.scrollY - 90;
      smoothScrollTo(offset);
      setMenuOpen(false);
    }
  };

  /* ---------------- SCROLL TRACKING ---------------- */
  useEffect(() => {
    if (pathname !== "/") return;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setHidden(y > lastScrollY.current && y > 80);
      lastScrollY.current = y;

      if (y < 300) {
        setActiveSection("home");
        return;
      }

      navItems.forEach((item) => {
        if (item.type !== "scroll") return;
        const el = document.getElementById(item.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  /* ---------------- DESKTOP UNDERLINE ---------------- */
  useEffect(() => {
    const el =
      pathname === "/about" || pathname === "/contact"
        ? navLinkRefs.current[pathname]
        : navLinkRefs.current[activeSection];

    if (el && highlightRef.current) {
      highlightRef.current.style.width = `${el.offsetWidth}px`;
      highlightRef.current.style.left = `${el.offsetLeft}px`;
    }
  }, [activeSection, pathname]);

  /* ---------------- MOBILE ACTIVE CHECK ---------------- */
  const isMobileActive = (item) => {
    if (item.type === "route") return pathname === item.id;
    if (item.type === "home") return pathname === "/" && activeSection === "home";
    if (item.type === "scroll")
      return pathname === "/" && activeSection === item.id;
    return false;
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-lg"
            : "bg-black/40 backdrop-blur-md"
        }`}
      >
        {/* LOGO */}
        <div
          onClick={() => (window.location.href = "/")}
          className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition"
        >
          <Image
            src="/images/logo.png"
            alt="Jatin Travels"
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />
          <span className="font-bold text-white text-xl">Jatin Travels</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 relative text-sm font-semibold">
          <span
            ref={highlightRef}
            className="absolute -bottom-2 h-[3px] bg-[#FF6A00] rounded-full transition-all duration-300"
          />

          {navItems.map((item) =>
            item.type === "modal" ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="ml-4 px-5 py-2 rounded-full bg-[#FF6A00] text-black font-bold hover:bg-[#E85B00] transition shadow-md cursor-pointer"
              >
                {item.label}
              </button>
            ) : item.type === "route" ? (
              <Link
                key={item.label}
                href={item.id}
                ref={(el) => (navLinkRefs.current[item.id] = el)}
                className={`cursor-pointer transition ${
                  pathname === item.id
                    ? "text-[#FF6A00]"
                    : "text-white/80 hover:text-[#FF6A00]"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                ref={(el) => (navLinkRefs.current[item.id] = el)}
                onClick={() => handleNavClick(item)}
                className={`cursor-pointer transition ${
                  activeSection === item.id
                    ? "text-[#FF6A00]"
                    : "text-white/80 hover:text-[#FF6A00]"
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-white text-3xl cursor-pointer hover:text-[#FF6A00] transition"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 left-0 h-full w-[80%] max-w-[320px] bg-[#0F0F17] p-6 flex flex-col transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Jatin Travels"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="font-bold">Jatin Travels</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl hover:text-[#FF6A00] transition"
            >
              <FiX />
            </button>
          </div>

          <div className="flex flex-col gap-5 py-6 text-base font-semibold">
            {navItems.map((item) =>
              item.type === "modal" ? null : item.type === "route" ? (
                <Link
                  key={item.label}
                  href={item.id}
                  onClick={() => setMenuOpen(false)}
                  className={`transition cursor-pointer ${
                    isMobileActive(item)
                      ? "text-[#FF6A00]"
                      : "text-white/80 hover:text-[#FF6A00]"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-left transition cursor-pointer ${
                    isMobileActive(item)
                      ? "text-[#FF6A00]"
                      : "text-white/80 hover:text-[#FF6A00]"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          <div className="mt-auto pt-6 border-t border-white/10">
            <button
              onClick={() => handleNavClick({ type: "modal" })}
              className="w-full py-3 rounded-xl bg-[#FF6A00] text-black font-bold hover:bg-[#E85B00] transition shadow-lg cursor-pointer"
            >
              🚖 Book a Ride
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
