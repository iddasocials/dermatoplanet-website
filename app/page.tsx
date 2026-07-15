import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import Features from "@/components/Features";
import Doctors from "@/components/Doctors";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CtaBar from "@/components/CtaBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Treatments />
        <Features />
        <Doctors />
        <Results />
        <Reviews />
        <Contact />
        <Footer />
      </main>
      <CtaBar />
    </>
  );
}
