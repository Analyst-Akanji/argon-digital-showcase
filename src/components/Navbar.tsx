import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "work", href: "#work" },
  { label: "services", href: "#services" },
  { label: "process", href: "#process" },
  { label: "demos", href: "#demos" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-graphite/85 backdrop-blur-md border-b border-white/5 transition-shadow ${
        scrolled ? "nav-shadow" : ""
      }`}
    >
      <div className="container-1200 flex items-center justify-between py-4 px-6">
        <a href="#" aria-label="Argon Industries home">
          <Logo size={30} />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] tracking-wider text-foreground/70 hover:text-signal transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            className="font-mono text-[12px] tracking-wider bg-signal hover:bg-signal/90 text-white px-4 py-2 rounded-md transition-colors"
          >
            get_quote →
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-graphite px-6 pb-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-foreground/80 hover:text-signal py-3 border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="font-mono text-sm bg-signal text-white text-center rounded-md px-4 py-3 mt-3"
          >
            get_quote →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
