import Hero from "@/components/Hero";
import Superpowers from "@/components/Superpowers";
import UseCases from "@/components/UseCases";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 bg-grid-pattern">
      <Hero />
      <Superpowers />
      <UseCases />
      <About />
      <Pricing />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  );
}
