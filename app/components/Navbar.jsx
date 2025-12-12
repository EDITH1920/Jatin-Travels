"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

// Sections for navbar
const sections = [
  { id: "book", label: "Book a Ride" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "reviews", label: "Reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("book");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);
  const highlightRef = useRef(null);
  const navLinkRefs = useRef([]);

  /* --------------------------------------
        PREMIUM SMOOTH SCROLL EASING
  ---------------------------------------- */
  const smoothScrollTo = (targetY, duration = 700) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const progress = Math.min(time / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + diff * ease);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  /* --------------------------------------
        SCROLL TO SECTION WITH OFFSET
  ---------------------------------------- */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = el.getBoundingClientRect().top + window.scrollY - 80;
    smoothScrollTo(offset);

    setMenuOpen(false);
  };

  /* --------------------------------------
        SCROLLSPY + AUTO HIDE NAV
  ---------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 10);
      setHidden(currentY > lastScrollY.current && currentY > 80);

      lastScrollY.current = currentY;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* --------------------------------------
        ACTIVE HIGHLIGHT SLIDER
  ---------------------------------------- */
  useEffect(() => {
    const el = navLinkRefs.current[activeSection];
    const highlight = highlightRef.current;

    if (el && highlight) {
      highlight.style.width = `${el.offsetWidth}px`;
      highlight.style.left = `${el.offsetLeft}px`;
    }
  }, [activeSection]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between
          transition-all duration-500
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          ${
            scrolled
              ? "bg-black/70 backdrop-blur-xl shadow-xl"
              : "bg-black/30 backdrop-blur-md"
          }
        `}
      >
        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => smoothScrollTo(0)}
        >
          <Image src={logo} alt="Logo" className="h-12 w-auto sm:h-14" />
          <span className="font-bold text-white text-xl sm:text-2xl">
            Jatin Travels
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 relative text-white text-lg font-medium">

          {/* ACTIVE SLIDER BAR */}
          <span
            ref={highlightRef}
            className="absolute bottom-0 h-[3px] bg-[#FF6A00] rounded-full transition-all duration-300"
          ></span>

          {sections.map((s) => (
            <button
              key={s.id}
              ref={(el) => (navLinkRefs.current[s.id] = el)}
              onClick={() => scrollToSection(s.id)}
              className={`nav-hover ${
                activeSection === s.id
                  ? "text-[#FF6A00]"
                  : "text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`
            absolute left-0 top-0 h-full w-[75%] max-w-[320px] bg-[#0F0F17]
            p-6 text-white transform transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <button
            className="text-3xl mb-6"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>

          <div className="flex flex-col gap-6 text-lg font-semibold">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="nav-hover"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
