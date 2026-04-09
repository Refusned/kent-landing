import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Tools from "@/components/Tools";
import Pricing from "@/components/Pricing";
import LearnMore from "@/components/LearnMore";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 bg-grid-pattern">
      <Hero />
      <About />
      <Values />
      <Tools />
      <Pricing />
      <LearnMore />
      <Footer />
    </main>
  );
}
