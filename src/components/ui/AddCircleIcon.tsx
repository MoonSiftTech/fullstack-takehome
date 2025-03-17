import React from "react";

interface AddCircleIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
}

export const AddCircleIcon: React.FC<AddCircleIconProps> = ({
  className,
  style,
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      data-testid="add-circle-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className={className}
      style={style}
    >
      <circle cx="12" cy="12" r="10" strokeWidth="1" />
      <line x1="12" y1="8" x2="12" y2="16" strokeWidth="1" />
      <line x1="8" y1="12" x2="16" y2="12" strokeWidth="1" />
    </svg>
  );
};
