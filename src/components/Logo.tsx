import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function LogoConectaX({ className = "", size = "md" }: LogoProps) {
  const dimensions = {
    sm: "h-8 w-auto",
    md: "h-10 w-auto",
    lg: "h-14 w-auto",
    xl: "h-20 w-auto",
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${dimensions[size]} text-primary`}
      >
        {/* Dashed Route Line */}
        <path
          d="M 65 42 C 45 48 30 65 35 85 C 42 105 110 115 160 108 C 210 100 240 85 245 75 C 250 65 235 55 220 52"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="10 10"
          className="opacity-90"
        />

        {/* Small detail loop on the 'e' of Conecta */}
        <path
          d="M 148 42 C 145 35 152 28 156 34"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />

        {/* Text "Conecta" using rounded, highly organic font stacks */}
        <text
          x="35"
          y="80"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          style={{
            fontFamily: '"Comfortaa", "Fredoka One", "Nunito", "Quicksand", "Inter", sans-serif',
            fontWeight: 900,
            fontSize: "46px",
            letterSpacing: "-1.5px",
          }}
        >
          Conecta
        </text>

        {/* Big stylized chunky X on the right */}
        <g stroke="currentColor" strokeWidth="18" strokeLinecap="round">
          {/* Main slash of X */}
          <path d="M 235 45 C 240 50 280 95 285 100" />
          {/* Counter slash of X */}
          <path d="M 285 45 C 280 50 235 95 235 100" />
        </g>
      </svg>
    </div>
  );
}
