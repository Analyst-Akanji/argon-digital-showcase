import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative bg-background pt-28 pb-24 md:pt-40 md:pb-36 overflow-hidden">
    {/* Glow effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-4 text-center max-w-4xl relative z-10"
    >
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block mb-6 rounded-full bg-primary px-5 py-2 text-xs font-bold text-primary-foreground tracking-wide uppercase"
      >
        Strategy-led web design
      </motion.span>
      <h1 className="text-[52px] md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-6 text-glow-blue">
        We build digital presence that works for your business
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
        From local businesses to startups — we design and develop websites that attract customers, build trust, and drive results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="text-base px-8 h-12 glow-blue" asChild>
          <a href="#work">See Our Work</a>
        </Button>
        <Button size="lg" variant="outline" className="text-base px-8 h-12 border-primary/50 text-foreground hover:bg-primary/10" asChild>
          <a href="#pricing">View Pricing</a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default Hero;
