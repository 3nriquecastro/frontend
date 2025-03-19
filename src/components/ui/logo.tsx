import React from "react";

interface LogoProps {
  className?: string;
  color?: string;
}

export function EnthosLogo({
  className = "w-8 h-8",
  color = "#1F2937",
}: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="180"
        height="220"
        rx="40"
        stroke={color}
        strokeWidth="20"
        fill="white"
      />
      <rect x="70" y="50" width="15" height="70" rx="2" fill={color} />
      <rect x="115" y="50" width="15" height="70" rx="2" fill={color} />
    </svg>
  );
}
