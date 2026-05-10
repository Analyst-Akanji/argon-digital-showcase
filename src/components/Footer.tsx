import Logo from "./Logo";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container-1200 px-6 py-6 flex items-center justify-between gap-4 flex-wrap">
      <Logo size={24} withWordmark={false} />
      <p className="text-sm text-muted-foreground">
        © 2025 Argon Industries. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
