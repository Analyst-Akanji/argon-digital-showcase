import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_NUMBER_DISPLAY = "0808 682 5973";
const WHATSAPP_URL = "https://wa.me/2348086825973";
const EMAIL_ADDRESS = "ibitowaemmanuel@gmail.com";
const EMAIL_URL = `mailto:${EMAIL_ADDRESS}`;

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const Contact = () => (
  <section id="contact" className="relative overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--cobalt)) 0%, hsl(var(--navy)) 100%)",
      }}
    />
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

      {/* Direct contact details */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white/95">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
          {WHATSAPP_NUMBER_DISPLAY}
        </a>
        <span className="hidden sm:inline text-white/40">•</span>
        <a
          href={EMAIL_URL}
          className="inline-flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
        >
          <Mail className="w-4 h-4" />
          {EMAIL_ADDRESS}
        </a>
      </div>

      <p className="mt-8 text-sm text-white/70">
        Based in Osogbo, Nigeria. Serving clients nationwide.
      </p>
    </div>
  </section>
);

export default Contact;
