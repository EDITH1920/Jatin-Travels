"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Replace these with your testimonial images
import user1 from "../assets/testimonial1.png";
import user2 from "../assets/testimonial2.png";
import user3 from "../assets/testimonial3.png";

const CustomerReviews = () => {
  // Review Modal states
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

  // Auto slider state
  const [slideIndex, setSlideIndex] = useState(0);

  const testimonials = [
    {
      name: "Rohit Sharma",
      img: user1,
      text: "Best cab service I have ever used. Clean cab and polite driver!",
      rating: 5,
    },
    {
      name: "Priya Verma",
      img: user2,
      text: "Reliable service even at midnight. Very safe!",
      rating: 5,
    },
    {
      name: "Manish Patel",
      img: user3,
      text: "Affordable prices and quick pickup!",
      rating: 4,
    },
  ];

  // Customer Reviews (static + can add backend later)
  const sampleReviews = [
    {
      name: "Ankit Singh",
      rating: 5,
      text: "Smooth ride and very professional driver!",
    },
    {
      name: "Simran Verma",
      rating: 4,
      text: "Clean cab and fast service. Highly recommended.",
    },
    {
      name: "Deepak Mishra",
      rating: 5,
      text: "Amazing service! Will book again for sure.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 900 });

    // Auto slide every 3 seconds
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Submit Review (WhatsApp)
  const handleSubmit = () => {
    if (!reviewText) return alert("Please write your review.");
    const msg = `Hello Jatin Travels,%0A%0AI want to submit a review.%0A%0ARating: ${rating}⭐%0AReview: ${reviewText}`;
    window.open(`https://wa.me/919179053619?text=${msg}`, "_blank");
    setShowModal(false);
    setReviewText("");
  };

  return (
    <section id="reviews" className="bg-[#0F0F17] text-white py-20 px-6 sm:px-10">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-[#FF6A00]">
          Customer Reviews
        </h2>
        <p className="text-gray-300 mt-3" data-aos="fade-up" data-aos-delay="150">
          Real feedback from our happy riders.
        </p>
      </div>

      {/* ⭐ AUTO SLIDING TESTIMONIAL CAROUSEL */}
      <div className="overflow-hidden max-w-3xl mx-auto mb-14">
        <div
          className="flex transition-all duration-700"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {testimonials.map((review, idx) => (
            <div key={idx} className="min-w-full px-6">
              <div
                data-aos="zoom-in"
                className="bg-[#1B1B2F]/60 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-[#FF6A00]/20 text-center"
              >
                <Image
                  src={review.img}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto border-2 border-[#FF6A00]"
                />

                <h3 className="mt-4 text-xl font-semibold">{review.name}</h3>

                <div className="flex justify-center gap-1 mt-2 text-[#FF6A00]">
                  {Array(review.rating).fill().map((_, i) => <FaStar key={i} />)}
                </div>

                <p className="mt-4 text-gray-300 text-sm leading-relaxed">"{review.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ⭐ WRITE A REVIEW BUTTON */}
      <div className="text-center mb-10">
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#FF6A00] hover:bg-[#E85B00] px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
        >
          Write a Review
        </button>
      </div>

      {/* ⭐ LIST OF STATIC REVIEWS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sampleReviews.map((rev, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="bg-[#1B1B2F]/60 backdrop-blur-lg p-6 rounded-xl border border-[#FF6A00]/20"
          >
            <div className="flex gap-1 mb-2 text-[#FF6A00]">
              {Array(rev.rating).fill().map((_, j) => <FaStar key={j} />)}
            </div>
            <p className="text-gray-300 italic">"{rev.text}"</p>
            <h4 className="mt-4 font-semibold text-lg">{rev.name}</h4>
          </div>
        ))}
      </div>

      {/* ⭐ REVIEW FORM MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#1B1B2F] p-6 rounded-xl w-11/12 max-w-md border border-[#FF6A00]/20">
            <h3 className="text-xl font-semibold text-[#FF6A00] mb-4">
              Write a Review
            </h3>

            <div className="flex gap-2 mb-4">
              {Array(5).fill().map((_, i) => (
                <FaStar
                  key={i}
                  onClick={() => setRating(i + 1)}
                  className={`cursor-pointer text-2xl ${i < rating ? "text-[#FF6A00]" : "text-gray-600"}`}
                />
              ))}
            </div>

            <textarea
              className="w-full p-3 rounded-lg bg-[#0F0F17] text-gray-300 border border-gray-700 outline-none"
              rows="4"
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-[#FF6A00] hover:bg-[#E85B00]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomerReviews;
