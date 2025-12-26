"use client";

import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-[#0F0F17] text-white min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Contact <span className="text-[#FF6A00]">Jatin Travels</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Get in touch with us for instant cab booking, pricing details,
            or travel enquiries across Chhattisgarh.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* CONTACT DETAILS */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#FF6A00] text-2xl mt-1" />
              <p className="text-gray-300">
                Dhodhipara Main Road, Korba,
                <br />
                Chhattisgarh – 495677
              </p>
            </div>

            <a
              href="tel:+919179053619"
              className="flex items-center gap-4 text-gray-300 hover:text-[#FF6A00] transition"
            >
              <FaPhoneAlt className="text-xl" />
              +91 91790 53619
            </a>

            <a
              href="https://wa.me/919179053619"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-[#25D366] transition"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Booking
            </a>

            {/* CTA */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919179053619"
                className="px-6 py-3 rounded-full bg-[#FF6A00] text-black font-bold text-center hover:bg-[#E85B00] transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919179053619"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-[#25D366]/40 text-[#25D366] font-bold text-center hover:bg-[#25D366] hover:text-black transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="w-full h-[380px] rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=22.3720648,82.7167348&z=17&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
