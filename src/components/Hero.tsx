import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="bg-card pt-24 pb-20 md:pt-32 md:pb-28">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <span className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary tracking-wide">
        Strategy-led web design
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
        We build digital presence that works for your business
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        From local businesses to startups — we design and develop websites that attract customers, build trust, and drive results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild>
          <a href="#work">See Our Work</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#pricing">View Pricing</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
