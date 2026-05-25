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
  gradient: string;
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
    gradient: "from-indigo-600 to-blue-500",
  },
  {
    tag: "REAL ESTATE",
    icon: Building2,
    name: "Love of God Industries",
    description:
      "A property and land sales platform with inquiry flow for a Nigerian block industry and property business.",
    link: "https://loveofgod01.vercel.app",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    tag: "FOOD & RESTAURANT",
    icon: UtensilsCrossed,
    name: "Amoke Oge Food Center",
    description:
      "A multi-location food ordering platform concept for a Lagos food brand with 6 branches, live menu, and kitchen management dashboard.",
    link: "https://amoke-taste-hub.lovable.app",
    gradient: "from-rose-600 to-orange-500",
  },
  {
    tag: "HOSPITALITY",
    icon: Coffee,
    name: "15'06 Café",
    description:
      "A premium café digital presence with menu showcase, ambience display, and online ordering experience.",
    link: "https://golden-ripple-lounge.lovable.app",
    gradient: "from-amber-600 to-yellow-500",
  },
  {
    tag: "YOUR BUSINESS",
    icon: Sparkles,
    name: "Your Business Here",
    description:
      "Don't see your industry? We build for any sector. Request a custom demo and see your business come to life.",
    link: "mailto:ibitowaemmanuel@gmail.com?subject=Demo%20Request%20%E2%80%94%20Argon%20Industries",
    gradient: "from-orange-500 to-amber-400",
    highlight: true,
    cta: {
      label: "Request a Demo",
      href: "mailto:ibitowaemmanuel@gmail.com?subject=Demo%20Request%20%E2%80%94%20Argon%20Industries",
    },
  },
];

const ORANGE = "#f59e0b";

const Demos = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
      gsap.from(cardsRef.current.filter(Boolean), {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      cardsRef.current.forEach((card) => {
        if (!card) return;
        const enter = () =>
          gsap.to(card, {
            y: -8,
            boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.25)",
            duration: 0.3,
            ease: "power2.out",
          });
        const leave = () =>
          gsap.to(card, {
            y: 0,
            boxShadow: "0 0px 0px 0px rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power2.out",
          });
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="demos"
      className="py-20 md:py-28"
      style={{ background: "hsl(232 38% 5%)" }}
    >
      <div className="container-1200 px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p
            className="text-xs sm:text-sm font-semibold tracking-[0.2em]"
            style={{ color: ORANGE }}
          >
            LIVE DEMOS
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
            See what we build. Click to experience it.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Every demo below is a real working platform built by Argon Industries.
            Click any card to explore it live.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            const isHighlight = demo.highlight;
            return (
              <div
                key={demo.name}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`group flex flex-col rounded-2xl overflow-hidden border ${
                  isHighlight
                    ? "border-transparent bg-card/80"
                    : "border-border bg-card"
                }`}
                style={
                  isHighlight
                    ? {
                        backgroundImage:
                          "linear-gradient(hsl(var(--card)), hsl(var(--card))), linear-gradient(135deg, #f59e0b, #fbbf24)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                        border: "2px solid transparent",
                      }
                    : undefined
                }
              >
                {/* Gradient header */}
                <div
                  className={`relative h-[120px] bg-gradient-to-br ${demo.gradient} flex items-center justify-center`}
                >
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider text-white"
                    style={{ backgroundColor: ORANGE }}
                  >
                    {demo.tag}
                  </span>
                  <Icon className="w-12 h-12 text-white" strokeWidth={1.75} />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-primary">{demo.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {demo.description}
                  </p>

                  <div className="mt-6">
                    {demo.cta ? (
                      <a
                        href={demo.cta.href}
                        className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-md font-semibold text-sm transition-colors"
                        style={{
                          backgroundColor: ORANGE,
                          color: "hsl(230 40% 8%)",
                        }}
                      >
                        {demo.cta.label}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <a
                        href={demo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-md font-semibold text-sm border-2 transition-colors"
                        style={{
                          borderColor: ORANGE,
                          color: ORANGE,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = ORANGE;
                          e.currentTarget.style.color = "hsl(230 40% 8%)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = ORANGE;
                        }}
                      >
                        View Demo
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
