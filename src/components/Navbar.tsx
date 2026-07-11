import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "WORK",      href: "#work" },
  { label: "APPROACH",  href: "#approach" },
  { label: "ABOUT",     href: "#about" },
  { label: "DEMOS",     href: "/demos" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "CONTACT",   href: "#contact" },
];

// Anything starting with "/" is a real route (Link); anything starting
// with "#" is an in-page anchor on the homepage (plain <a>).
const isRoute = (href: string) => href.startsWith("/");

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkStyle = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "rgba(245,243,238,0.7)",
    textDecoration: "none",
  };

  return (
    <header
      style={{
        background: "rgba(15,20,25,0.98)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        zIndex: 50,
      }}
    >
      <nav style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>

        <ul style={{
          alignItems: "center",
          gap: "36px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }} className="nav-desktop-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              {isRoute(link.href) ? (
                <Link to={link.href} style={linkStyle}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} style={linkStyle}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          style={{
            background: "#E8623D",
            color: "#F5F3EE",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
          }}
          className="nav-cta"
        >
          Start a Project
        </a>

        <button
          style={{ background: "none", border: "none", color: "#F5F3EE", cursor: "pointer", padding: "4px" }}
          className="nav-hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div style={{
          background: "#0F1419",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "24px",
        }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {isRoute(link.href) ? (
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      padding: "20px 0",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      color: "#F5F3EE",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      padding: "20px 0",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "16px",
                      color: "#F5F3EE",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              textAlign: "center",
              background: "#E8623D",
              color: "#F5F3EE",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              padding: "14px",
              borderRadius: "6px",
              textDecoration: "none",
              marginTop: "24px",
            }}
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
