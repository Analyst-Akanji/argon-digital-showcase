import { ArrowUpRight } from "lucide-react";
import shammahImg from "@/assets/shammah-academy.jpg";
import loveOfGodImg from "@/assets/loveofgod-realestate.jpg";
import limmexImg from "@/assets/limmex.jpg";

type Project = {
  tag: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  image?: string;
};

const projects: Project[] = [
  {
    tag: "Education",
    title: "Shammah Academy",
    description:
      "A complete school landing page for a Creche-to-Secondary institution in Osogbo, capturing the school's warmth and academic excellence.",
    link: "#",
    linkLabel: "View Site",
    image: shammahImg,
  },
  {
    tag: "Real Estate & Commerce",
    title: "Love of God Industries",
    description:
      "A WhatsApp-commerce platform for block industry and property sales, connecting buyers directly with the business.",
    link: "#",
    linkLabel: "View Site",
    image: loveOfGodImg,
  },
  {
    tag: "E-commerce",
    title: "StyleByLimmex",
    description:
      "A bespoke menswear e-commerce platform for a premium fashion brand — crafted for style-conscious Nigerian men.",
    link: "https://stylebylimmex.com",
    linkLabel: "stylebylimmex.com",
    image: limmexImg,
  },
  {
    tag: "Booking Platform",
    title: "TubeyOnirun",
    description:
      "A premium hair styling and appointment booking platform designed to streamline client bookings for a growing beauty brand.",
    link: "https://tubeyonirun.com",
    linkLabel: "tubeyonirun.com",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.link}
    target={project.link === "#" ? undefined : "_blank"}
    rel="noopener noreferrer"
    className="group relative flex flex-col rounded-2xl bg-background border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/15"
  >
    {/* Image / placeholder */}
    <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, hsl(var(--primary) / 0.08) 1px, transparent 1px), linear-gradient(45deg, hsl(var(--accent) / 0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      )}

      {/* Tag */}
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-xs font-semibold text-primary border border-border">
        {project.tag}
      </span>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="inline-flex items-center gap-2 text-accent-foreground font-semibold text-base">
          View Project
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>
    </div>

    {/* Body */}
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-primary">{project.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        {project.linkLabel} <span aria-hidden>→</span>
      </span>
    </div>
  </a>
);

const Work = () => (
  <section id="work" className="bg-background py-20 md:py-28">
    <div className="container-1200 px-6">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-accent">
          OUR WORK
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
          Projects We're Proud Of
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          Every site we ship is built with care, clarity, and the client's audience in mind.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  </section>
);

export default Work;
