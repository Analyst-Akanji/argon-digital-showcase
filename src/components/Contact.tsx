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
  <section id="contact" className="relative bg-graphite border-t border-white/5">
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(245,243,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,238,1) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    <div className="container-1200 px-6 py-24 md:py-32 relative">
      <div className="max-w-3xl">
        <p className="mono-label text-signal mb-4">// direct_line</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
          Skip the form.
          <br />
          <span className="text-foreground/50">Talk to us directly.</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed">
          Prefer a conversation? Reach us on WhatsApp or by email — we respond
          within 24 hours.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-2xl">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-md border border-white/10 bg-surface p-6 hover:border-signal transition-colors"
          >
            <div className="w-10 h-10 rounded-md bg-signal/10 flex items-center justify-center shrink-0">
              <WhatsAppIcon className="w-5 h-5 text-signal" />
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-foreground/50 uppercase mb-1">
                whatsapp
              </div>
              <div className="text-foreground font-semibold group-hover:text-signal transition-colors">
                {WHATSAPP_NUMBER_DISPLAY}
              </div>
            </div>
          </a>

          <a
            href={EMAIL_URL}
            className="group flex items-start gap-4 rounded-md border border-white/10 bg-surface p-6 hover:border-signal transition-colors"
          >
            <div className="w-10 h-10 rounded-md bg-signal/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-signal" />
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[10px] tracking-widest text-foreground/50 uppercase mb-1">
                email
              </div>
              <div className="text-foreground font-semibold truncate group-hover:text-signal transition-colors">
                {EMAIL_ADDRESS}
              </div>
            </div>
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-foreground/40">
          <span className="w-8 h-px bg-white/15" />
          <span>Based in Osogbo, Nigeria · Serving clients nationwide</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
