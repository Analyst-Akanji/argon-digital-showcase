interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

const Logo = ({ size = 32, withWordmark = true, className = "" }: LogoProps) => {
  const gradId = `argon-grad-${size}`;
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
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(var(--navy))" />
            <stop offset="100%" stopColor="hsl(var(--cobalt))" />
          </linearGradient>
        </defs>
        {/* Geometric "A" mark — angular shapes */}
        <path d="M20 3 L37 36 L28 36 L20 19 L12 36 L3 36 Z" fill={`url(#${gradId})`} />
        <path d="M14 27 L26 27 L29 33 L11 33 Z" fill="hsl(var(--cobalt))" opacity="0.95" />
      </svg>
      {withWordmark && (
        <span className="font-bold text-primary tracking-tight text-lg md:text-xl">
          Argon Industries
        </span>
      )}
    </div>
  );
};

export default Logo;
