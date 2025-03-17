import React from "react";
import styled from "styled-components";

interface TypographyProps {
  variant?: string;
  color?: string;
  align?: "left" | "center" | "right";
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const TypographyRoot = styled.span<TypographyProps>`
  color: ${(props) => props.color || "inherit"};
  text-align: ${(props) => props.align || "inherit"};

  ${({ theme, variant }) => {
    if (variant) {
      return theme.fns.getTypographyStyles(variant);
    }
    return "";
  }}
`;

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  align,
  component = "span",
  className,
  style,
  children,
  ...otherProps
}) => {
  return (
    <TypographyRoot
      as={component}
      variant={variant}
      color={color}
      align={align}
      className={className}
      style={style}
      {...otherProps}
    >
      {children}
    </TypographyRoot>
  );
};
