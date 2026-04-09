import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="text-xl font-black text-foreground">
          Argon<span className="text-accent">.</span> Industries
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button asChild className="glow-blue">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full">
            <a href="#contact" onClick={() => setOpen(false)}>Get a Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
