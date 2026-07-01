const StatusStrip = () => {
  return (
    <div
      className="w-full bg-graphite border-b"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-9 flex items-center gap-6">
        <span className="flex items-center gap-2 font-mono-brand text-[11px] text-paper/70">
          <span className="pulse-dot" />
          Building: 2 active client projects
        </span>
        <span
          className="hidden sm:inline font-mono-brand text-[11px] text-paper/30"
          aria-hidden
        >
          ·
        </span>
        <span className="hidden sm:inline font-mono-brand text-[11px] text-paper/70">
          Last shipped: Love of God Properties &amp; Block Industry
        </span>
        <span
          className="hidden sm:inline font-mono-brand text-[11px] text-paper/30"
          aria-hidden
        >
          ·
        </span>
        <span className="font-mono-brand text-[11px] text-signal ml-auto sm:ml-0">
          Open for: 1 new engagement
        </span>
      </div>
    </div>
  );
};

export default StatusStrip;
