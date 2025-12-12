"use client";

import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Reviews() {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

  const sampleReviews = [
    {
      name: "Ankit Singh",
      rating: 5,
      text: "Smooth ride and very professional driver!",
    },
    {
      name: "Simran Verma",
      rating: 4,
      text: "Clean cab and fast service. Highly recommended!",
    },
    {
      name: "Deepak Mishra",
      rating: 5,
      text: "Affordable and safe travelling experience.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  // WhatsApp Review Submission
  const handleSubmit = () => {
    if (!reviewText) return alert("Please write your review.");

    const msg = `Hello Jatin Travels,%0A%0AHere is my review:%0A⭐ Rating: ${rating}%0A📝 Review: ${reviewText}`;
    window.open(`https://wa.me/919179053619?text=${msg}`, "_blank");

    setShowModal(false);
    setReviewText("");
  };

  return (
    <section
      id="reviews"
      className="py-20 px-6 sm:px-10 bg-[#0C0C18] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2
          className="text-4xl font-bold text-[#FF6A00]"
          data-aos="fade-up"
        >
          Customer Reviews
        </h2>

        {/* Divider */}
        <div
          className="w-24 h-[3px] bg-[#FF6A00] mx-auto mt-4 rounded-full opacity-80"
          data-aos="fade-up"
          data-aos-delay="150"
        ></div>

        {/* Subtitle */}
        <p
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Read what our customers say and share your experience with us.
        </p>

        {/* Write Review Button */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-8 bg-[#FF6A00] hover:bg-[#E85B00] px-6 py-3 rounded-full font-semibold transition-all"
          data-aos="zoom-in"
          data-aos-delay="350"
        >
          Write a Review
        </button>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {sampleReviews.map((rev, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={200 + i * 150}
              className="bg-[#1B1B2F]/60 backdrop-blur-lg p-6 rounded-xl border border-[#FF6A00]/20 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(255,106,0,0.45)]"
            >
              <div className="flex gap-1 text-[#FF6A00] mb-2">
                {Array(rev.rating)
                  .fill()
                  .map((_, j) => (
                    <FaStar key={j} />
                  ))}
              </div>

              <p className="text-gray-300 italic leading-relaxed">
                "{rev.text}"
              </p>

              <h4 className="mt-4 font-semibold text-lg">{rev.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-[#1B1B2F] p-6 w-11/12 max-w-md rounded-xl border border-[#FF6A00]/20">
            <h3 className="text-xl font-bold text-[#FF6A00] mb-4">
              Write a Review
            </h3>

            {/* Rating */}
            <div className="flex gap-2 mb-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar
                    key={i}
                    onClick={() => setRating(i + 1)}
                    className={`cursor-pointer text-2xl ${
                      i < rating ? "text-[#FF6A00]" : "text-gray-600"
                    }`}
                  />
                ))}
            </div>

            {/* Review Textbox */}
            <textarea
              className="w-full p-3 rounded-lg bg-[#0F0F17] text-gray-300 border border-gray-700 outline-none"
              rows="4"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review..."
            ></textarea>

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
}
