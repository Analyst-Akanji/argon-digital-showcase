interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

const Logo = ({ size = 32, withWordmark = true, className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20 3 L37 36 L28 36 L20 19 L12 36 L3 36 Z" fill="#E8623D" />
        <path d="M14 27 L26 27 L29 33 L11 33 Z" fill="#C94F2E" opacity="0.95" />
      </svg>
      {withWordmark && (
        <span style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#F5F3EE",
          letterSpacing: "-0.02em",
        }}>
          Argon Industries
        </span>
      )}
    </div>
  );
};

export default Logo;
