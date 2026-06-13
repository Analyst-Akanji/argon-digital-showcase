import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Demos from "@/components/Demos";
import LeadIntake from "@/components/LeadIntake";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col bg-transparent">
    <Navbar />
    <main className="flex-1">
      <Hero />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Demos />
      <LeadIntake />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
