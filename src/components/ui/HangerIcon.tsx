import React from "react";

interface HangerIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
}

export const HangerIcon: React.FC<HangerIconProps> = ({
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
      <path
        d="M12 8l-6 4v8h12v-8l-6-4z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" strokeWidth="2" />
    </svg>
  );
};
