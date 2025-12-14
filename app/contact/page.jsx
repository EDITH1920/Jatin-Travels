"use client";

import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0F0F17] text-white px-4 pt-[120px] pb-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FF6A00]">Contact Jatin Travels</h1>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
            Get in touch with us for bookings, enquiries, or travel assistance. We’re always ready to help.
          </p>
          <Link href="/" className="inline-block mt-6 px-5 py-2 border border-[#FF6A00]/40 text-[#FF6A00] rounded-full hover:bg-[#FF6A00] hover:text-black transition">
            ← Back to Home
          </Link>
        </div>

        {/* CONTACT CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* CALL */}
          <a href="tel:+919999999999" className="bg-[#151522] p-8 rounded-2xl border border-[#FF6A00]/20 hover:border-[#FF6A00] transition text-center">
            <div className="flex justify-center mb-4 text-[#FF6A00]">
              <FaPhoneAlt size={36} />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-400">+91 99999 99999</p>
          </a>

          {/* WHATSAPP */}
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="bg-[#151522] p-8 rounded-2xl border border-[#25D366]/30 hover:border-[#25D366] transition text-center">
            <div className="flex justify-center mb-4 text-[#25D366]">
              <FaWhatsapp size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-400">Chat with us instantly</p>
          </a>

          {/* HOURS */}
          <div className="bg-[#151522] p-8 rounded-2xl border border-[#FF6A00]/20 text-center">
            <div className="flex justify-center mb-4 text-[#FF6A00]">
              <FaClock size={36} />
            </div>
            <h3 className="text-xl font-bold mb-2">Working Hours</h3>
            <p className="text-gray-400">24 × 7 Available</p>
          </div>

        </section>

        {/* MAP + ADDRESS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ADDRESS */}
          <div className="bg-[#151522] p-8 rounded-2xl border border-[#FF6A00]/20">
            <h2 className="text-3xl font-bold text-[#FF6A00] mb-6">Our Office</h2>

            <div className="flex items-start gap-4 text-gray-300 text-lg">
              <FaMapMarkerAlt className="text-[#FF6A00] mt-1" />
              <p>
                Jatin Travels<br />
                Korba, Chhattisgarh<br />
                India
              </p>
            </div>

            <p className="mt-6 text-gray-400">
              Serving local, outstation, airport & tourist cab services across nearby cities and routes.
            </p>
          </div>

          {/* GOOGLE MAP */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden border border-[#FF6A00]/20">
            <iframe
              title="Jatin Travels Location"
              src="https://www.google.com/maps?q=Korba%20Chhattisgarh&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </section>

      </div>
    </main>
  );
}
