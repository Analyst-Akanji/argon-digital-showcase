import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import shammahImg from "@/assets/shammah-academy.jpg";
import loveofgodImg from "@/assets/loveofgod-realestate.jpg";

const projects = [
  {
    tag: "Education",
    image: shammahImg,
    title: "Shammah Academy",
    desc: "A full school website with enrolment inquiry forms and a parent-focused digital presence.",
    link: "https://shammah-rooted-excellence.vercel.app/",
  },
  {
    tag: "Real Estate",
    image: loveofgodImg,
    title: "Love of God Industries",
    desc: "A land sales platform with inquiry forms and property listings for a real estate company.",
    link: "https://loveofgod01.vercel.app/",
  },
];

const Work = () => (
  <section id="work" className="bg-background py-24">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-xs font-bold tracking-[0.2em] text-primary text-center mb-3 uppercase">Our Work</p>
        <h2 className="text-3xl md:text-5xl font-black text-foreground text-center mb-14">Projects we're proud of</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ScrollReveal key={p.title}>
            <div className="rounded-xl border border-border overflow-hidden bg-card hover:border-primary/60 hover:glow-blue transition-all duration-300 group">
              <img src={p.image} alt={p.title} className="h-52 w-full object-cover" loading="lazy" width={800} height={512} />
              <div className="p-7">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 bg-primary/20 text-primary">{p.tag}</span>
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline group-hover:gap-2.5 transition-all">
                  View live site <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
