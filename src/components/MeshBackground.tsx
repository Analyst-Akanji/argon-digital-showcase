import { ReactNode } from "react";

interface MeshBackgroundProps {
  children: ReactNode;
}

const noiseSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>`;

const MeshBackground = ({ children }: MeshBackgroundProps) => (
  <>
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0, background: "#0F1419" }}
    >
      <div className="mesh-orb mesh-orb-1" />
      <div className="mesh-orb mesh-orb-2" />
      <div className="mesh-orb mesh-orb-3" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${noiseSvg}")`,
          opacity: 0.05,
          mixBlendMode: "overlay",
        }}
      />
    </div>

    <div className="relative" style={{ zIndex: 1 }}>
      {children}
    </div>

    <style>{`
      .mesh-orb {
        position: absolute;
        border-radius: 9999px;
        filter: blur(140px);
        will-change: transform;
      }
      .mesh-orb-1 {
        width: 55vw; height: 55vw;
        top: -15vw; left: -10vw;
        background: #E8623D;
        opacity: 0.10;
        animation: meshDrift1 26s ease-in-out infinite alternate;
      }
      .mesh-orb-2 {
        width: 50vw; height: 50vw;
        top: 20vh; right: -15vw;
        background: #7C9A92;
        opacity: 0.12;
        animation: meshDrift2 30s ease-in-out infinite alternate;
      }
      .mesh-orb-3 {
        width: 60vw; height: 60vw;
        bottom: -20vw; left: 10vw;
        background: #0F1419;
        opacity: 0.9;
        animation: meshDrift3 24s ease-in-out infinite alternate;
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
        to   { transform: translate(6vw, -8vh) scale(1.05); }
      }
      @media (prefers-reduced-motion: reduce) {
        .mesh-orb { animation: none !important; }
      }
    `}</style>
  </>
);

export default MeshBackground;
