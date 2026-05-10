import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2348086825973";
const EMAIL_URL = "mailto:hello@argonindustries.com";

const Contact = () => (
  <section id="contact" className="relative overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--cobalt)) 0%, hsl(var(--navy)) 100%)",
      }}
    />
    {/* Subtle pattern */}
    <div
      aria-hidden
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }}
    />

    <div className="container-1200 px-6 py-20 md:py-28 relative text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
        Ready to Build Your Next Website?
      </h2>
      <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
        Let's talk about your project. We respond within 24 hours.
      </p>

      <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="bg-white hover:bg-white/90 text-primary font-semibold"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-transparent border-white/70 text-white hover:bg-white/10 hover:text-white"
        >
          <a href={EMAIL_URL}>
            <Mail className="w-4 h-4" />
            Send an Email
          </a>
        </Button>
      </div>

      <p className="mt-8 text-sm text-white/70">
        Based in Osogbo, Nigeria. Serving clients nationwide.
      </p>
    </div>
  </section>
);

export default Contact;
