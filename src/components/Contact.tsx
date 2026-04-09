import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const Contact = () => (
  <section id="contact" className="bg-primary py-24">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <ScrollReveal>
        <p className="text-xs font-bold tracking-[0.2em] text-primary-foreground/70 mb-3 uppercase">Contact</p>
        <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-5">Ready to build something?</h2>
        <p className="text-primary-foreground/80 mb-10 text-lg leading-relaxed">
          Tell us about your business and what you need. We'll get back to you within 24 hours with a clear plan and honest quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white text-base h-12 px-8">
            <a href="https://wa.me/2348086825973" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" className="bg-white text-background hover:bg-white/90 text-base h-12 px-8">
            <a href="mailto:ibitowaemmanuel@gmail.com">
              <Mail size={18} className="mr-2" /> Send an Email
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Contact;
