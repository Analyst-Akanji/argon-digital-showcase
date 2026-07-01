import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  Building2,
  UtensilsCrossed,
  Coffee,
  Sparkles,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Demo = {
  tag: string;
  icon: LucideIcon;
  name: string;
  description: string;
  link: string;
  cta?: { label: string; href: string };
  highlight?: boolean;
};

const demos: Demo[] = [
  {
    tag: "EDUCATION",
    icon: GraduationCap,
    name: "Shammah Academy",
    description:
      "A complete school digital presence with enrolment inquiry system for a Creche to Secondary institution.",
    link: "https://shammah-rooted-excellence.vercel.app",
  },
  {
    tag: "REAL_ESTATE",
    icon: Building2,
    name: "Love of God Industries",
    description:
      "A property and land sales platform with inquiry flow for a Nigerian block industry and property business.",
    link: "https://loveofgod01.vercel.app",
  },
  {
    tag: "FOOD",
    icon: UtensilsCrossed,
    name: "Amoke Oge Food Center",
    description:
      "A multi-location food ordering platform for a Lagos food brand with 6 branches, live menu, and kitchen management dashboard.",
    link: "https://amoke-taste-hub.lovable.app",
  },
  {
    tag: "HOSPITALITY",
    icon: Coffee,
    name: "15'06 Café",
    description:
      "A premium café digital presence with menu showcase, ambience display, and online ordering experience.",
    link: "https://golden-ripple-lounge.lovable.app",
  },
  {
    tag: "YOUR_SECTOR",
    icon: Sparkles,
    name: "Your Business Here",
    description:
      "Don't see your industry? We build for any sector. Request a custom demo and see your business come to life.",
    link: "mailto:ibitowaemmanuel@gmail.com?subject=Demo%20Request%20%E2%80%94%20Argon%20Industries",
    highlight: true,
    cta: {
      label: "request_demo",
      href: "mailto:ibitowaemmanuel@gmail.com?subject=Demo%20Request%20%E2%80%94%20Argon%20Industries",
    },
  },
];

const Demos = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current.filter(Boolean), {
        opacity: 0,
        y: 32,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="demos"
      className="bg-graphite py-24 md:py-32 border-t border-white/5"
    >
      <div className="container-1200 px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="mono-label text-signal mb-4">// live_demos</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight max-w-2xl">
              See what we build. Click any card to explore it live.
            </h2>
          </div>
          <p className="text-foreground/60 max-w-md text-sm md:text-base leading-relaxed">
            Every demo below is a real, working platform built by Argon
            Industries.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            const isHighlight = demo.highlight;
            return (
              <div
                key={demo.name}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`group flex flex-col rounded-md border overflow-hidden transition-colors ${
                  isHighlight
                    ? "bg-signal/5 border-signal/40 hover:border-signal"
                    : "bg-surface border-white/10 hover:border-white/25"
                }`}
              >
                {/* Header block — flat, no gradient */}
                <div
                  className={`relative h-[110px] flex items-center justify-between px-6 border-b ${
                    isHighlight
                      ? "border-signal/30 bg-signal/10"
                      : "border-white/10 bg-graphite"
                  }`}
                >
                  <Icon
                    className={`w-9 h-9 ${
                      isHighlight ? "text-signal" : "text-sage"
                    }`}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`font-mono text-[10px] tracking-widest px-2 py-1 rounded-sm ${
                      isHighlight
                        ? "bg-signal text-white"
                        : "bg-white/10 text-foreground/70"
                    }`}
                  >
                    {demo.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {demo.name}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed flex-1">
                    {demo.description}
                  </p>

                  <div className="mt-6">
                    {demo.cta ? (
                      <a
                        href={demo.cta.href}
                        className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-md bg-signal hover:bg-signal/90 text-white font-mono text-sm tracking-wide transition-colors"
                      >
                        {demo.cta.label} →
                      </a>
                    ) : (
                      <a
                        href={demo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-white/15 hover:border-signal hover:text-signal text-foreground font-mono text-sm tracking-wide transition-colors"
                      >
                        view_demo
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Demos;
