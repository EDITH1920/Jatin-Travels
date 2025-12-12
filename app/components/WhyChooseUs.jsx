"use client";

import { FaCarSide, FaShieldAlt, FaClock } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import AOS from "aos";
import { useEffect } from "react";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const features = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "Safe & Reliable Rides",
      desc: "Your safety is our priority — experienced drivers & well-maintained cabs.",
    },
    {
      icon: <FaCarSide size={40} />,
      title: "Fast Pickup",
      desc: "Get picked up quickly with our responsive and fast cab service.",
    },
    {
      icon: <GiReceiveMoney size={40} />,
      title: "Affordable Pricing",
      desc: "Premium rides at the most affordable pricing across Chhattisgarh.",
    },
    {
      icon: <FaClock size={40} />,
      title: "24×7 Service",
      desc: "Book anytime — day or night. We’re available for all travel needs.",
    },
  ];

  return (
    <section className="bg-[#0C0C18] py-12 sm:py-14 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-bold text-[#FF6A00]"
        >
          Why Choose Us?
        </h2>

        {/* Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="w-24 h-[3px] bg-[#FF6A00] mx-auto mt-3 rounded-full opacity-80"
        ></div>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-gray-300 mt-4 text-base max-w-2xl mx-auto"
        >
          Your trusted cab partner across Chhattisgarh — delivering the best travel experience.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={200 + index * 150}
              className="p-6 rounded-xl bg-[#1B1B2F]/50 backdrop-blur-md shadow-lg border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_28px_rgba(255,106,0,0.35)]"
            >
              {/* Icon */}
              <div className="text-[#FF6A00] mb-4 drop-shadow-[0_0_6px_rgba(255,106,0,0.6)] flex justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm max-w-[260px] mx-auto leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
