"use client";

import { createContext, useContext, useState } from "react";
import PricingBookingModal from "./PricingBookingModal";

const PricingModalContext = createContext();

export function PricingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const openPricingModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsOpen(true);
  };

  const closePricingModal = () => {
    setIsOpen(false);
  };

  return (
    <PricingModalContext.Provider value={{ openPricingModal }}>
      {children}

      {/* GLOBAL MODAL INSTANCE */}
      <PricingBookingModal
        isOpen={isOpen}
        onClose={closePricingModal}
        selectedPackage={selectedPackage}
      />
    </PricingModalContext.Provider>
  );
}

export const usePricingModal = () => useContext(PricingModalContext);
