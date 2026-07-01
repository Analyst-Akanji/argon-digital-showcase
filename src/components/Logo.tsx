interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

const Logo = ({ size = 32, withWordmark = true, className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="38" height="38" rx="4" fill="#0F1419" stroke="#E8623D" strokeWidth="1.5" />
        <path d="M20 8 L31 32 L26 32 L20 18 L14 32 L9 32 Z" fill="#F5F3EE" />
        <rect x="14" y="26" width="12" height="2" fill="#E8623D" />
      </svg>
      {withWordmark && (
        <span
          className="font-mono font-semibold text-foreground tracking-tight text-sm md:text-base"
        >
          argon<span className="text-signal">.</span>industries
        </span>
      )}
    </div>
  );
};

export default Logo;
