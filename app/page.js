import Hero from "./components/Hero";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <BookingCTA />
      <WhyChooseUs />
      <FloatingButtons />
      <Footer />
      
    </main>
  );
}
