import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Superpowers from "@/components/Superpowers";
import UseCases from "@/components/UseCases";
import ROI from "@/components/ROI";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 bg-grid-pattern">
      <Hero />
      <About />
      <HowItWorks />
      <Superpowers />
      <UseCases />
      <ROI />
      <Testimonials />
      <Pricing />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  );
}
