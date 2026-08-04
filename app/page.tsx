import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import StatsBand from "@/components/StatsBand";
import Insights from "@/components/Insights";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between selection:bg-[var(--color-gold)] selection:text-white">
      <div>
        <Nav />
        <Hero />
        <FeaturedWork />
        <StatsBand />
        <Insights />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
