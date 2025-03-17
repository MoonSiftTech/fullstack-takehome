import React from "react";

interface OptionsIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
}

export const OptionsIcon: React.FC<OptionsIconProps> = ({
  className,
  style,
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      className={className}
      style={style}
    >
      <rect
        x="0.5"
        y="0.5"
        width="19"
        height="19"
        rx="9.5"
        fill="white"
        stroke="black"
      />
      <path
        d="M9.02148 9.97839C9.02148 10.5307 9.4692 10.9784 10.0215 10.9784C10.5738 10.9784 11.0215 10.5307 11.0215 9.97839C11.0215 9.42611 10.5738 8.97839 10.0215 8.97839C9.4692 8.97839 9.02148 9.42611 9.02148 9.97839Z"
        fill="black"
      />
      <path
        d="M13.1074 9.97839C13.1074 10.5307 13.5551 10.9784 14.1074 10.9784C14.6597 10.9784 15.1074 10.5307 15.1074 9.97839C15.1074 9.42611 14.6597 8.97839 14.1074 8.97839C13.5551 8.97839 13.1074 9.42611 13.1074 9.97839Z"
        fill="black"
      />
      <path
        d="M4.93555 9.97839C4.93555 10.5307 5.38326 10.9784 5.93555 10.9784C6.48783 10.9784 6.93555 10.5307 6.93555 9.97839C6.93555 9.42611 6.48783 8.97839 5.93555 8.97839C5.38326 8.97839 4.93555 9.42611 4.93555 9.97839Z"
        fill="black"
      />
    </svg>
  );
};
