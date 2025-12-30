import Link from "next/link";
import Image from "next/image";
import {
  FaCarSide,
  FaUsers,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

/* =========================
   ✅ PAGE-LEVEL SEO (ABOUT)
   ========================= */
export const metadata = {
  title: "About Jatin Travels",
  description:
    "Learn about Jatin Travels, a trusted cab service in Korba offering safe, comfortable and reliable taxi services across Chhattisgarh.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#0F0F17] text-white px-4 pt-[120px] pb-20">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FF6A00]">
            About Jatin Travels
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
            Trusted cab & travel services delivering comfort, safety, and
            reliability across city, outstation, airport, and tourist routes.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 px-5 py-2 border border-[#FF6A00]/40 text-[#FF6A00] rounded-full hover:bg-[#FF6A00] hover:text-black transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* WHO WE ARE */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-[#FF6A00]">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            <strong>Jatin Travels</strong> is a customer-focused cab service
            provider offering reliable transportation solutions for daily
            travel, long-distance journeys, airport transfers, and tourist
            packages.
            <br />
            <br />
            With experienced drivers, well-maintained vehicles, and transparent
            pricing, our mission is to make every ride safe, comfortable, and
            stress-free.
          </p>
        </section>

        {/* CEO SECTION */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[#151522] p-8 rounded-2xl border border-[#FF6A00]/20">
            <div className="flex justify-center">
              <div className="relative w-60 h-60 rounded-2xl overflow-hidden border border-[#FF6A00]/30">
                <Image
                  src="/images/ceo.png"
                  alt="Founder & CEO of Jatin Travels"
                  width={400}
                  height={500}
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#FF6A00] mb-4">
                Message from the Founder
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Jatin Travels, our vision has always been simple — to provide
                dependable, honest, and comfortable travel services that people
                can trust.
                <br />
                <br />
                We understand that travel is not just about reaching a
                destination, but about feeling safe and relaxed throughout the
                journey. That is why we focus on quality vehicles, trained
                drivers, and customer-first service.
              </p>
              <p className="mt-4 font-semibold text-white">
                — Shiv Sahu, Founder
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[#FF6A00] text-center">
            Why Choose Jatin Travels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaCarSide,
                title: "Well-Maintained Fleet",
                desc: "Clean, comfortable vehicles for city, outstation & group travel.",
              },
              {
                icon: FaUsers,
                title: "Professional Drivers",
                desc: "Experienced, polite & route-knowledgeable drivers.",
              },
              {
                icon: FaShieldAlt,
                title: "Safety First",
                desc: "Your safety is our priority, always.",
              },
              {
                icon: FaMapMarkedAlt,
                title: "Wide Coverage",
                desc: "Local rides, city routes, airport & tourist destinations.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#151522] p-6 rounded-2xl border border-[#FF6A00]/20 hover:border-[#FF6A00] transition shadow-lg text-center"
                >
                  <div className="flex justify-center mb-4 text-[#FF6A00]">
                    <Icon size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SERVICES SUMMARY */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#FF6A00]">
            What We Offer
          </h2>
          <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside">
            <li>Local city rides with hourly packages</li>
            <li>Outstation one-way & round-trip travel</li>
            <li>Airport pickup & drop services</li>
            <li>Tourist & pilgrimage packages</li>
            <li>Corporate & group travel solutions</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center bg-[#151522] p-10 rounded-2xl border border-[#FF6A00]/20">
          <h2 className="text-3xl font-bold text-[#FF6A00] mb-4">
            Ready to Book Your Ride?
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
            Experience hassle-free travel with Jatin Travels today.
          </p>
          <Link
            href="/#services"
            className="inline-block px-6 py-3 rounded-full bg-[#FF6A00] hover:bg-[#E85B00] text-black font-semibold transition"
          >
            Book a Ride
          </Link>
        </section>
      </div>
    </main>
  );
}
