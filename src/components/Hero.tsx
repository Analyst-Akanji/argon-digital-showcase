import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/2348086825973";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
    <div className="container-1200 w-full px-6 py-24 md:py-28 relative">
      <div className="max-w-3xl text-left">
        {/* Eyebrow */}
        <p
          className="hero-rise uppercase font-semibold text-accent mb-6"
          style={{
            fontSize: "10px",
            letterSpacing: "0.28em",
            animationDelay: "0ms",
          }}
        >
          Web Design · Osogbo, Nigeria
        </p>

        {/* Headline */}
        <h1
          className="leading-[1.02] tracking-tight text-foreground"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span
            className="hero-rise block text-5xl sm:text-6xl lg:text-7xl"
            style={{ fontWeight: 300, animationDelay: "150ms" }}
          >
            We Build Websites
          </span>
          <span
            className="hero-rise block text-5xl sm:text-6xl lg:text-7xl mt-2"
            style={{ fontWeight: 800, animationDelay: "300ms" }}
          >
            That Work For Your Business
          </span>
        </h1>

        {/* Glass card value prop */}
        <div
          className="hero-rise mt-8 inline-block max-w-xl text-foreground/90 text-sm sm:text-base"
          style={{
            animationDelay: "450ms",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "16px",
            padding: "14px 20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          We design and build high-performance websites for Nigerian businesses.
        </div>

        {/* CTAs */}
        <div
          className="hero-rise mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          style={{ animationDelay: "600ms" }}
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
  </section>
);

export default Hero;
