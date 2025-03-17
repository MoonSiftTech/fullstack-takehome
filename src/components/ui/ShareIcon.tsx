import React from "react";

interface ShareIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
}

export const ShareIcon: React.FC<ShareIconProps> = ({
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
      <circle cx="18" cy="5" r="3" strokeWidth="1" />
      <circle cx="6" cy="12" r="3" strokeWidth="1" />
      <circle cx="18" cy="19" r="3" strokeWidth="1" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeWidth="1" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeWidth="1" />
    </svg>
  );
};
