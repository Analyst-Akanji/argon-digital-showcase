import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";

const WHATSAPP_URL = "https://wa.me/2348086825973";

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-graphite">
    {/* Sliding background images — heavily desaturated */}
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="hero-bg-slide absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg1})`, animationDelay: "0s" }}
      />
      <div
        className="hero-bg-slide absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg2})`, animationDelay: "7s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/60" />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,243,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,238,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>

    <div className="container-1200 w-full px-6 py-24 md:py-28 relative z-10">
      <div className="max-w-4xl">
        {/* Meta line */}
        <div
          className="hero-rise flex items-center gap-3 mb-8 font-mono text-[11px] tracking-widest text-foreground/60 uppercase"
          style={{ animationDelay: "0ms" }}
        >
          <span className="inline-block w-8 h-px bg-signal" />
          <span>Studio_v3</span>
          <span className="text-foreground/30">/</span>
          <span>Osogbo, NG</span>
          <span className="text-foreground/30">/</span>
          <span className="text-signal">● online</span>
        </div>

        {/* Headline */}
        <h1 className="leading-[1.02] tracking-tight text-foreground font-sans">
          <span
            className="hero-rise block text-4xl sm:text-6xl lg:text-7xl font-extrabold"
            style={{ animationDelay: "150ms" }}
          >
            We build digital products
          </span>
          <span
            className="hero-rise block text-4xl sm:text-6xl lg:text-7xl font-extrabold mt-1 text-foreground/50"
            style={{ animationDelay: "300ms" }}
          >
            that <span className="text-signal">actually ship</span>.
          </span>
        </h1>

        <p
          className="hero-rise mt-8 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed"
          style={{ animationDelay: "450ms" }}
        >
          Argon Industries is a PM-developer hybrid studio for Nigerian
          businesses. We think through the product with you, then build the
          website, dashboard, or platform end-to-end.
        </p>

        {/* CTAs */}
        <div
          className="hero-rise mt-10 flex flex-col sm:flex-row gap-3"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 bg-signal hover:bg-signal/90 text-white font-mono text-sm tracking-wide px-6 py-3.5 rounded-md transition-colors"
          >
            start_a_project →
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 border border-foreground/20 hover:border-foreground/40 hover:bg-white/5 text-foreground font-mono text-sm tracking-wide px-6 py-3.5 rounded-md transition-colors"
          >
            see_our_work
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-foreground/60 hover:text-foreground font-mono text-sm px-2 py-3.5 transition-colors"
          >
            or_chat_on_whatsapp
          </a>
        </div>

        {/* Stat strip */}
        <div
          className="hero-rise mt-16 grid grid-cols-3 max-w-2xl gap-6 pt-8 border-t border-white/10"
          style={{ animationDelay: "800ms" }}
        >
          {[
            { n: "12+", l: "products shipped" },
            { n: "48h", l: "quote turnaround" },
            { n: "100%", l: "client retention" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-mono text-2xl md:text-3xl font-semibold text-signal">
                {s.n}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
