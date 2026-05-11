import { ReactNode } from "react";

interface MeshBackgroundProps {
  children: ReactNode;
}

const noiseSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>`;

const MeshBackground = ({ children }: MeshBackgroundProps) => (
  <>
    {/* Mesh background layer */}
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0, background: "#06060f" }}
    >
      <div className="mesh-orb mesh-orb-1" />
      <div className="mesh-orb mesh-orb-2" />
      <div className="mesh-orb mesh-orb-3" />
      <div className="mesh-orb mesh-orb-4" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${noiseSvg}")`,
          opacity: 0.03,
          mixBlendMode: "overlay",
        }}
      />
    </div>

    {/* Foreground content */}
    <div className="relative" style={{ zIndex: 1 }}>
      {children}
    </div>

    <style>{`
      .mesh-orb {
        position: absolute;
        border-radius: 9999px;
        filter: blur(120px);
        will-change: transform;
      }
      .mesh-orb-1 {
        width: 60vw; height: 60vw;
        top: -15vw; left: -15vw;
        background: #0a0a1a;
        opacity: 0.95;
        animation: meshDrift1 24s ease-in-out infinite alternate;
      }
      .mesh-orb-2 {
        width: 55vw; height: 55vw;
        top: -10vw; right: -15vw;
        background: #7c3aed;
        opacity: 0.45;
        animation: meshDrift2 28s ease-in-out infinite alternate;
      }
      .mesh-orb-3 {
        width: 60vw; height: 60vw;
        bottom: -20vw; left: -10vw;
        background: #0d9488;
        opacity: 0.40;
        animation: meshDrift3 22s ease-in-out infinite alternate;
      }
      .mesh-orb-4 {
        width: 50vw; height: 50vw;
        bottom: -15vw; right: -15vw;
        background: #e11d48;
        opacity: 0.20;
        animation: meshDrift4 20s ease-in-out infinite alternate;
      }
      @keyframes meshDrift1 {
        from { transform: translate(0,0) scale(1); }
        to   { transform: translate(8vw, 6vh) scale(1.1); }
      }
      @keyframes meshDrift2 {
        from { transform: translate(0,0) scale(1); }
        to   { transform: translate(-10vw, 8vh) scale(1.15); }
      }
      @keyframes meshDrift3 {
        from { transform: translate(0,0) scale(1); }
        to   { transform: translate(6vw, -8vh) scale(1.1); }
      }
      @keyframes meshDrift4 {
        from { transform: translate(0,0) scale(1); }
        to   { transform: translate(-8vw, -6vh) scale(1.2); }
      }
      @media (prefers-reduced-motion: reduce) {
        .mesh-orb { animation: none !important; }
      }
    `}</style>
  </>
);

export default MeshBackground;
