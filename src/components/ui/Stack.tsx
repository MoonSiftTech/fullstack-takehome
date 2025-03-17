import React from "react";
import styled from "styled-components";

interface StackProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  alignItems?: "stretch" | "center" | "start" | "end";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  spacing?: number | string;
  gap?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

const StackRoot = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => props.gap || "0"};

  & > :not(style) + :not(style) {
    ${(props) => {
      if (!props.spacing) return "";
      const margin =
        props.direction === "column"
          ? `${props.spacing}px 0 0 0`
          : `0 ${props.spacing}px 0 0`;
      return `margin: ${margin};`;
    }}
  }
`;

export const Stack: React.FC<StackProps> = ({
  direction = "column",
  wrap = "nowrap",
  alignItems = "stretch",
  justifyContent = "flex-start",
  spacing = 0,
  gap = "0",
  className,
  style,
  children,
  onClick,
  ...otherProps
}) => {
  return (
    <StackRoot
      direction={direction}
      wrap={wrap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      spacing={spacing}
      gap={gap}
      className={className}
      style={style}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </StackRoot>
  );
};
