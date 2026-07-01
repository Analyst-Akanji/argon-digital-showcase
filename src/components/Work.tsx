import { ArrowUpRight, Scissors, ShoppingBag } from "lucide-react";
import limmexImg from "@/assets/limmex.jpg";
import tubeyImg from "@/assets/tubey-onirun.jpg";

type Project = {
  index: string;
  tag: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  image?: string;
  icon: React.ReactNode;
};

const projects: Project[] = [
  {
    index: "01",
    tag: "Booking Platform",
    title: "TubeyOnirun",
    description:
      "A premium hair styling and appointment booking platform designed to streamline client bookings for a growing beauty brand.",
    link: "https://tubeyonirun.com",
    linkLabel: "tubeyonirun.com",
    image: tubeyImg,
    icon: <Scissors className="w-3.5 h-3.5" />,
  },
  {
    index: "02",
    tag: "E-commerce",
    title: "StyleByLimmex",
    description:
      "A bespoke menswear e-commerce platform for a premium fashion brand — crafted for style-conscious Nigerian men.",
    link: "https://stylebylimmex.com",
    linkLabel: "stylebylimmex.com",
    image: limmexImg,
    icon: <ShoppingBag className="w-3.5 h-3.5" />,
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.link}
    target={project.link === "#" ? undefined : "_blank"}
    rel="noopener noreferrer"
    className="group relative flex flex-col rounded-md bg-card-light border border-black/8 overflow-hidden transition-all duration-300 hover:-translate-y-1"
    style={{ borderColor: "rgba(0,0,0,0.08)" }}
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-graphite/90 backdrop-blur font-mono text-[10px] tracking-widest uppercase text-paper">
        {project.icon}
        {project.tag}
      </span>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[11px] tracking-widest text-ink/40">
          /{project.index}
        </span>
        <span className="font-mono text-[11px] text-ink/40 group-hover:text-signal transition-colors flex items-center gap-1">
          {project.linkLabel}
          <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
      <h3 className="text-xl font-bold text-ink">{project.title}</h3>
      <p className="mt-2 text-sm text-ink/60 leading-relaxed flex-1">
        {project.description}
      </p>
    </div>
  </a>
);

const Work = () => (
  <section id="work" className="section-paper py-24 md:py-32">
    <div className="container-1200 px-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="mono-label text-signal mb-4">// selected_work</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight max-w-2xl">
            Real client work. Live in production.
          </h2>
        </div>
        <p className="text-ink/60 max-w-md text-sm md:text-base leading-relaxed">
          Every site we ship is built with care, clarity, and the client's
          audience in mind.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  </section>
);

export default Work;
