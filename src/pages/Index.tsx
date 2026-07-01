import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import LeadIntake from "@/components/LeadIntake";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Work />
      <Process />
      <About />
      <Contact />
      <div style={{
        background: "#F5F3EE",
        padding: "0",
      }}>
        <LeadIntake />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
