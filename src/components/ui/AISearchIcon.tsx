import React from "react";

interface AISearchIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
}

export const AISearchIcon: React.FC<AISearchIconProps> = ({
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
        d="M13.3335 18.0007H15.6668C16.2857 18.0007 16.8792 17.7549 17.3168 17.3173C17.7544 16.8797 18.0002 16.2862 18.0002 15.6673V13.334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0002 6.66671V4.33335C18.0002 3.71451 17.7544 3.12101 17.3168 2.68342C16.8792 2.24583 16.2857 2 15.6668 2H13.3335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66671 18.0007H4.33335C3.71451 18.0007 3.12101 17.7549 2.68342 17.3173C2.24583 16.8797 2 16.2862 2 15.6673V13.334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6.66671V4.33335C2 3.71451 2.24583 3.12101 2.68342 2.68342C3.12101 2.24583 3.71451 2 4.33335 2H6.66671"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33531 5.6543C8.64919 5.6543 7.97847 5.85776 7.40798 6.23895C6.83749 6.62014 6.39285 7.16193 6.13028 7.79583C5.86771 8.42973 5.79901 9.12725 5.93287 9.80019C6.06673 10.4731 6.39713 11.0913 6.88229 11.5764C7.36745 12.0616 7.98558 12.392 8.65852 12.5258C9.33146 12.6597 10.029 12.591 10.6629 12.3284C11.2968 12.0659 11.8386 11.6212 12.2198 11.0507C12.601 10.4802 12.8044 9.80952 12.8044 9.1234C12.8044 8.20335 12.4388 7.32101 11.7883 6.67044C11.1377 6.01987 10.2554 5.65436 9.33531 5.6543V5.6543Z"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
      <path
        d="M11.9238 11.7109L14.3466 14.1337"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
