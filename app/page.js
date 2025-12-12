import Hero from "./components/Hero";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Reviews from "./components/Reviews";
import CustomerReviews from "./components/CustomerReviews";


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <BookingCTA />
      <WhyChooseUs />
      {/* <CustomerReviews /> */}
      {/* <Testimonials /> */}
      <Reviews />
      <FloatingButtons />
      <Footer />
      
    </main>
  );
}
