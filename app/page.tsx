import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Superpowers from "@/components/Superpowers";
import UseCases from "@/components/UseCases";
import ROI from "@/components/ROI";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 bg-grid-pattern">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Superpowers />
      <UseCases />
      <ROI />
      <Comparison />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
