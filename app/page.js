import Hero from './components/Hero';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      
      <Hero />
       <BookingCTA />

      {/* Floating Buttons (fixed, does NOT affect layout) */}
      <FloatingButtons />

      {/* Footer directly below content */}
      <Footer />


      
    </main>
  );
}
