"use client";

export default function TermsAndConditions() {
  return (
    <main className="bg-[#0F0F17] text-white min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-4xl font-extrabold text-[#FF6A00]">
          Terms & Conditions
        </h1>

        <p className="text-gray-400">
          By booking or using the services of <strong>Jatin Travels</strong>,
          you agree to the following terms and conditions.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Service Overview</h2>
          <p className="text-gray-400">
            Jatin Travels provides cab and taxi services for local travel,
            outstation trips, airport transfers, and tourist travel across
            Chhattisgarh.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Booking & Payments</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Bookings can be made via call or WhatsApp</li>
            <li>Prices are communicated before the trip</li>
            <li>Extra charges may apply for tolls, parking, or waiting time</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cancellations</h2>
          <p className="text-gray-400">
            Cancellation charges may apply depending on the timing of
            cancellation and distance traveled by the driver.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Passenger Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Provide correct pickup and drop details</li>
            <li>Maintain respectful behavior with drivers</li>
            <li>Avoid illegal or unsafe activities during the ride</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Liability</h2>
          <p className="text-gray-400">
            Jatin Travels is not responsible for delays caused by traffic,
            weather conditions, or unforeseen circumstances beyond our control.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Changes to Terms</h2>
          <p className="text-gray-400">
            We reserve the right to update these terms at any time. Continued
            use of our services implies acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="text-gray-400">
            For questions regarding these Terms & Conditions, contact:
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
