import React from "react";
import styled from "styled-components";

interface HeartIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
  filled?: boolean;
}

const StyledSvg = styled.svg<HeartIconProps>`
  width: ${(props) => props.size || 20}px;
  height: ${(props) => props.size || 20}px;
  fill: ${(props) => (props.filled ? props.color || "red" : "none")};
  stroke: ${(props) => props.color || "currentColor"};
`;

export const HeartIcon: React.FC<HeartIconProps> = ({
  className,
  style,
  size,
  color,
  filled = false,
  ...otherProps
}) => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 18"
      className={className}
      style={style}
      size={size}
      color={color}
      filled={filled}
      {...otherProps}
    >
      <path
        d="M10.0382 17.3639L10.0374 17.3634C6.8622 15.3032 5.50787 13.9029 4.77463 13.0505C3.20367 11.221 2.47912 9.37968 2.50046 7.40573L2.50046 7.40554C2.52284 5.26289 4.32626 3.5 6.53917 3.5C8.02607 3.5 9.09834 4.23745 9.78538 4.94315L9.78537 4.94316L9.78817 4.94599C9.88188 5.04073 9.99354 5.11492 10.1157 5.16519C10.2377 5.21545 10.3684 5.24107 10.5 5.24107C10.6316 5.24107 10.7623 5.21545 10.8843 5.16519C11.0065 5.11492 11.1181 5.04073 11.2118 4.94599L11.2144 4.94335C11.9025 4.23734 12.974 3.5 14.4608 3.5C16.6737 3.5 18.4772 5.26289 18.4995 7.40554L18.4995 7.40573C18.5209 9.37959 17.7956 11.221 16.2253 13.0506L16.2252 13.0507C15.4925 13.9048 14.1385 15.3028 10.9626 17.3634L10.9618 17.3639C10.8278 17.4513 10.667 17.4995 10.5005 17.5C10.3337 17.4997 10.1725 17.4515 10.0382 17.3639Z"
        strokeWidth="2"
      />
    </StyledSvg>
  );
};
