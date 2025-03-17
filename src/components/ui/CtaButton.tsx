import React from "react";
import styled from "styled-components";

interface CtaButtonProps {
  variant?: "primary-black" | "primary-white" | "secondary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const StyledButton = styled.button<CtaButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  ${(props) => {
    switch (props.variant) {
      case "primary-black":
        return `
          background-color: black;
          color: white;
          border: 1px solid black;
        `;
      case "primary-white":
        return `
          background-color: white;
          color: black;
          border: 1px solid black;
        `;
      case "secondary":
        return `
          background-color: transparent;
          color: black;
          border: 1px solid black;
        `;
      default:
        return `
          background-color: black;
          color: white;
          border: 1px solid black;
        `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case "small":
        return `
          height: 36px;
          padding: 0 12px;
          font-size: 14px;
        `;
      case "medium":
        return `
          height: 42px;
          padding: 0 16px;
          font-size: 18px;
        `;
      case "large":
        return `
          height: 54px;
          padding: 0 24px;
          font-size: 26px;
        `;
      default:
        return `
          height: 42px;
          padding: 0 16px;
          font-size: 18px;
        `;
    }
  }}
`;

export const CtaButton: React.FC<CtaButtonProps> = ({
  variant = "primary-black",
  size = "medium",
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  onClick,
  className,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={disabled || loading ? undefined : onClick}
      className={className}
    >
      {loading ? "Loading..." : children}
    </StyledButton>
  );
};
