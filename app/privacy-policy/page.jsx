"use client";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#0F0F17] text-white min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-4xl font-extrabold text-[#FF6A00]">
          Privacy Policy
        </h1>

        <p className="text-gray-400">
          At <strong>Jatin Travels</strong>, we respect your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Information We Collect</h2>
          <p className="text-gray-400">
            We may collect the following information when you contact or book
            with us:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Name</li>
            <li>Phone number</li>
            <li>Pickup and drop location</li>
            <li>Travel date and time</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">How We Use Your Information</h2>
          <p className="text-gray-400">
            Your information is used only to:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Confirm and manage cab bookings</li>
            <li>Contact you regarding your ride</li>
            <li>Provide customer support</li>
            <li>Improve our services</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Data Sharing</h2>
          <p className="text-gray-400">
            We do <strong>not</strong> sell, trade, or rent your personal
            information to third parties. Your data is shared only with drivers
            when required to complete your booking.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Data Security</h2>
          <p className="text-gray-400">
            We take reasonable measures to protect your personal information
            from unauthorized access or misuse.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Third-Party Services</h2>
          <p className="text-gray-400">
            Our website may include links to third-party services such as
            WhatsApp or Google Maps. We are not responsible for the privacy
            practices of these services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-gray-400">
            If you have any questions regarding this Privacy Policy, you can
            contact us at:
          </p>
          <p className="text-gray-400">
            📞 +91 91790 53619 <br />
            📧 jatintravels24@gmail.com
          </p>
        </section>

        <p className="text-gray-500 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  );
}
