"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

// Sections to track
const sections = [
  { id: "book", label: "Book a Ride" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "reviews", label: "Reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);

  // Scroll events: ScrollSpy + Hide/Show Navbar + Solid Transition
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Transparent → Solid transition
      setScrolled(currentY > 10);

      // Auto-hide navbar on scroll down
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;

      // ScrollSpy: Detect which section is active
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 200 && bottom >= 200) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    menuOpen
      ? document.addEventListener("mousedown", handleClick)
      : document.removeEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between
          transition-all duration-500
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          ${scrolled ? "bg-black/70 backdrop-blur-xl shadow-2xl" : "bg-black/30 backdrop-blur-md"}
        `}
      >
        {/* Logo & Brand */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <Image src={logo} alt="Logo" className="h-12 w-auto sm:h-14" />
          <span className="font-bold text-white text-xl sm:text-2xl">
            Jatin Travels
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white text-lg font-medium">
          {sections.map((s, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(s.id)}
              className={`relative group transition-all duration-300 ${
                activeSection === s.id ? "text-[#FF6A00]" : "hover:text-[#FF6A00]"
              }`}
            >
              {s.label}

              {/* Animated underline */}
              <span
                className={`
                  absolute left-0 bottom-0 h-[2px] bg-[#FF6A00] transition-all duration-300
                  ${activeSection === s.id ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-300
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div
          ref={menuRef}
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

          {/* Mobile Menu Links */}
          <div className="flex flex-col gap-6 text-lg font-semibold">
            {sections.map((s, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(s.id)}
                className={`transition ${
                  activeSection === s.id ? "text-[#FF6A00]" : "hover:text-[#FF6A00]"
                }`}
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
