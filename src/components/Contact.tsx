import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contact" className="bg-card py-20">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <p className="text-xs font-semibold tracking-widest text-primary mb-2">CONTACT</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to build something?</h2>
      <p className="text-muted-foreground mb-8">
        Tell us about your business and what you need. We'll get back to you within 24 hours with a clear plan and honest quote.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground">
          <a href="https://wa.me/2348086825973" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="mailto:ibitowaemmanuel@gmail.com">
            <Mail size={18} className="mr-2" /> Send an Email
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default Contact;
