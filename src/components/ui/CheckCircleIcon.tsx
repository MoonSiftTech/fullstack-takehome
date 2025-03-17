import React from "react";

interface CheckCircleIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
}

export const CheckCircleIcon: React.FC<CheckCircleIconProps> = ({
  className,
  style,
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className={className}
      style={style}
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path d="M9 12l2 2 4-4" strokeWidth="2" />
    </svg>
  );
};
