// app/page.js
"use client";

import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FloatingButtons from "./components/FloatingButtons";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import Fleet from "./components/Fleet";



export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState(null);

  /* ------------------------------------------
      A) Listen to Navbar's "openBookingModal"
  ------------------------------------------- */
  useEffect(() => {
    const openListener = (e) => {
      const service = e.detail?.service || null;
      setModalService(service);
      setModalOpen(true);
    };

    window.addEventListener("openBookingModal", openListener);
    return () => window.removeEventListener("openBookingModal", openListener);
  }, []);

  /* ------------------------------------------
      B) Callback passed to Services section
  ------------------------------------------- */
  const openBookingModal = (serviceTitle) => {
    setModalService(serviceTitle || null);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">

      <Hero />

      <WhyChooseUs />

      {/* Services passes service name into modal */}
      <Services openBookingModal={openBookingModal} />
      <Fleet openBookingModal={openBookingModal} />
      <Pricing openBookingModal={openBookingModal} />
      <Reviews />

      <FloatingButtons />

      {/* Booking Modal (global) */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={modalService}
      />

      <Footer />
    </main>
  );
}
