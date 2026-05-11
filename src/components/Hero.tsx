import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/2348086825973";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const riseStyle = (delayMs: number): React.CSSProperties => ({
  animation: `heroRise 0.7s ${EASE} both`,
  animationDelay: `${delayMs}ms`,
});

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
    <div className="container-1200 w-full px-6 py-24 md:py-28 relative">
      <div className="max-w-3xl text-left">
        {/* Eyebrow */}
        <p
          style={{
            ...riseStyle(0),
            fontSize: "10px",
            letterSpacing: "0.28em",
          }}
          className="uppercase font-semibold text-accent mb-6"
        >
          Web Design · Osogbo, Nigeria
        </p>

        {/* Headline */}
        <h1
          className="leading-[1.02] tracking-tight text-foreground"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span
            className="block text-5xl sm:text-6xl lg:text-7xl"
            style={{ ...riseStyle(0), fontWeight: 300 }}
          >
            We Build Websites
          </span>
          <span
            className="block text-5xl sm:text-6xl lg:text-7xl mt-2"
            style={{ ...riseStyle(150), fontWeight: 800 }}
          >
            That Work For Your Business
          </span>
        </h1>

        {/* Glass card value prop */}
        <div
          style={{
            ...riseStyle(300),
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "16px",
            padding: "14px 20px",
          }}
          className="mt-8 inline-block max-w-xl text-foreground/90 text-sm sm:text-base"
        >
          We design and build high-performance websites for Nigerian businesses.
        </div>

        {/* CTAs */}
        <div
          style={riseStyle(450)}
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href="#work">See Our Work</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-white/5 hover:bg-white/10 text-foreground backdrop-blur"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Get a Quote
            </a>
          </Button>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes heroRise {
        from { opacity: 0; transform: translateY(30px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </section>
);

export default Hero;
