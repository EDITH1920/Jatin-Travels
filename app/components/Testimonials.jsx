"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

// Sample user images (you can replace with real ones)
import user1 from "../assets/testimonial1.png";
import user2 from "../assets/testimonial2.png";
import user3 from "../assets/testimonial3.png";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
    });
  }, []);

  const reviews = [
    {
      name: "John",
      img: user1,
      rating: 5,
      text: "Best cab service in Chhattisgarh. Very polite driver and comfortable ride. Highly recommended!",
    },
    {
      name: "Priya",
      img: user2,
      rating: 5,
      text: "I booked at 2 AM and they arrived within minutes! Trustworthy and safe service.",
    },
    {
      name: "Mark",
      img: user3,
      rating: 4,
      text: "Affordable pricing and clean cabs. Pickup was fast and smooth. Great experience!",
    },
  ];

  return (
    <section className="bg-[#0C0C18] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-bold text-[#FF6A00]"
        >
          What Our Customers Say
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="w-24 h-[3px] bg-[#FF6A00] mx-auto mt-3 rounded-full opacity-80"
        ></div>

        <p
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          Real stories from real customers who trust Jatin Travels for their journeys.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={200 + index * 150}
              className="bg-[#1B1B2F]/50 backdrop-blur-md p-6 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_28px_rgba(255,106,0,0.35)]"
            >
              {/* Image */}
              <Image
                src={review.img}
                alt={review.name}
                className="w-20 h-20 object-cover rounded-full mx-auto border-2 border-[#FF6A00]"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold mt-4">{review.name}</h3>

              {/* Stars */}
              <div className="flex justify-center mt-2 text-[#FF6A00]">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
