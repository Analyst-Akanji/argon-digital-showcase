import { ArrowRight } from "lucide-react";

const projects = [
  {
    tag: "Education",
    color: "bg-primary/10 text-primary",
    thumb: "bg-gradient-to-br from-primary/60 to-primary/20",
    title: "Shammah Academy",
    desc: "A full school website with enrolment inquiry forms and a parent-focused digital presence.",
    link: "https://shammah-rooted-excellence.vercel.app/",
  },
  {
    tag: "Real Estate",
    color: "bg-accent/10 text-accent",
    thumb: "bg-gradient-to-br from-accent/60 to-accent/20",
    title: "Love of God Industries",
    desc: "A land sales platform with inquiry forms and property listings for a real estate company.",
    link: "https://loveofgod01.vercel.app/",
  },
];

const Work = () => (
  <section id="work" className="bg-card py-20">
    <div className="container mx-auto px-4">
      <p className="text-xs font-semibold tracking-widest text-primary text-center mb-2">OUR WORK</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Projects we're proud of</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
            <div className={`${p.thumb} h-48`} />
            <div className="p-6">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${p.color}`}>{p.tag}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                View live site <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
