import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-graphite border-t border-white/5">
    <div className="container-1200 px-6 py-8 flex items-center justify-between gap-4 flex-wrap">
      <Logo size={22} />
      <p className="font-mono text-[11px] tracking-wider text-foreground/40">
        © {new Date().getFullYear()} argon.industries — built in Osogbo, NG
      </p>
    </div>
  </footer>
);

export default Footer;
