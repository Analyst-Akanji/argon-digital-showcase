import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_URL = "https://wa.me/2348086825973";

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
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur-md transition-shadow ${
        scrolled ? "nav-shadow" : ""
      }`}
    >
      <div className="container-1200 flex items-center justify-between py-4 px-6">
        <a href="#" aria-label="Argon Industries home">
          <Logo size={32} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Get a Quote
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-primary/80 hover:text-accent py-2"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              Get a Quote
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
