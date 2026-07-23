import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Guarantees from "@/components/sections/Guarantees";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Guarantees />
        <Testimonials />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
