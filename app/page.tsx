import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import Features from "@/components/Features";
import Doctors from "@/components/Doctors";
import Awards from "@/components/Awards";
import Reviews from "@/components/Reviews";
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
        <Awards />
        <Reviews />
        <Footer />
      </main>
      <CtaBar />
    </>
  );
}
