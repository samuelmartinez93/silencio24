import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import Audience from "../components/Audience";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import ScrollReveals from "../components/ScrollReveals";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Benefits />
        <HowItWorks />
        <Audience />
        <Booking />
        <ScrollReveals />
      </main>
      <Footer />
    </>
  );
}
