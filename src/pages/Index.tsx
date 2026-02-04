import FloatingElements from "@/components/FloatingElements";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEO />
      <StructuredData />
      <div className="min-h-screen bg-cosmic noise relative">
        <FloatingElements />
        <Cursor />
        <Navigation />
        <ScrollToTop />

        <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
