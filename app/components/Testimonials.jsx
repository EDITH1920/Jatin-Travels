"use client";

import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  const reviews = [
    {
      name: "Rahul Verma",
      location: "Korba",
      review:
        "Very reliable cab service. Driver arrived on time and the car was clean and comfortable. Highly recommended for outstation travel.",
    },
    {
      name: "Pooja Sharma",
      location: "Raipur",
      review:
        "Booked a cab through WhatsApp and the response was quick. Smooth ride and transparent pricing. Will book again.",
    },
    {
      name: "Amit Patel",
      location: "Bilaspur",
      review:
        "Professional drivers and excellent service. Perfect for airport pickup and drop. Felt safe throughout the journey.",
    },
  ];

  return (
    <section id="reviews" className="bg-[#0F0F17] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What Our <span className="text-[#FF6A00]">Customers Say</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Real experiences from customers who trusted Jatin Travels for their journeys.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-[#151522] border border-white/10 rounded-2xl p-6 hover:border-[#FF6A00] transition-all duration-300"
            >
              {/* STARS */}
              <div className="flex items-center gap-1 text-[#FF6A00] mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* REVIEW */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                “{item.review}”
              </p>

              {/* USER */}
              <div>
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-gray-500 text-xs">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="text-center mt-14">
          <p className="text-gray-400 mb-4">
            Want to share your experience with us?
          </p>

          <a
            href="https://maps.app.goo.gl/vvzrfyLtjnRxCp5m6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-[#FF6A00] hover:bg-[#E85B00] text-black font-semibold transition"
          >
            Leave a Google Review
          </a>
        </div>

      </div>
    </section>
  );
}
