import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, MapPin } from "lucide-react";
// 4+ projects delivered

const WHATSAPP_URL = "https://wa.me/2348086825973";

const BrowserMockup = () => (
  <div className="relative w-full max-w-md mx-auto animate-float">
    {/* Decorative shapes */}
    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-accent/15 rotate-12" />
    <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/10" />

    {/* Browser frame */}
    <div className="relative rounded-xl bg-white shadow-2xl border border-border overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-secondary border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <div className="ml-3 flex-1 h-5 rounded bg-background/70" />
      </div>
      <div className="p-5 space-y-4">
        <div className="h-3 rounded bg-primary/80 w-2/3" />
        <div className="h-2.5 rounded bg-muted-foreground/30 w-full" />
        <div className="h-2.5 rounded bg-muted-foreground/30 w-5/6" />
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="h-20 rounded-lg bg-gradient-to-br from-primary to-accent" />
          <div className="h-20 rounded-lg bg-secondary border border-border" />
        </div>
        <div className="flex gap-2 pt-1">
          <div className="h-8 w-24 rounded-md bg-accent" />
          <div className="h-8 w-20 rounded-md bg-secondary border border-border" />
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-background">
    {/* Subtle geometric accent on the right */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(45deg, hsl(var(--accent)) 1px, transparent 1px)",
        backgroundSize: "32px 32px, 32px 32px",
      }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--accent) / 0.18), transparent 70%)",
      }}
    />

    <div className="container-1200 px-6 py-16 md:py-24 lg:py-28 relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="animate-fade-in text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.08]">
            We Build Websites That Work For Your Business
          </h1>
          <p
            className="animate-slide-up mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
            style={{ animationDelay: "0.15s" }}
          >
            Argon Industries helps Nigerian businesses, startups, and personal
            brands get online with clean, fast, and conversion-focused websites.
          </p>

          <div
            className="animate-pop-in mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            style={{ animationDelay: "0.35s" }}
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Get a Quote
              </a>
            </Button>
          </div>

          <div
            className="animate-fade-in mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-xs sm:text-sm text-muted-foreground"
            style={{ animationDelay: "0.55s" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              5+ Projects Delivered
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-accent" />
              Fast Turnaround
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent" />
              Built for Nigeria
            </span>
          </div>
        </div>

        {/* Mockup */}
        <div className="hidden lg:block">
          <BrowserMockup />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
