import React from "react";
import styled from "styled-components";
import { Typography } from "src/components/ui";

interface SquareButtonProps {
  icon: React.ReactNode;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  shadow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const StyledSquareButton = styled.div<SquareButtonProps>`
  min-width: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  button {
    padding: 8px 12px;
    color: black;
    background: white;
    cursor: ${(props) => (props.loading ? "wait" : "pointer")};
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    ${(props) =>
      props.shadow &&
      `
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
    `}
  }

  svg {
    display: block;
  }
`;

export const SquareButton: React.FC<SquareButtonProps> = ({
  icon,
  loading = false,
  onClick,
  shadow = false,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <StyledSquareButton
      className={className}
      style={style}
      shadow={shadow}
      icon={icon}
      {...props}
    >
      <button onClick={loading ? undefined : onClick}>
        {loading ? <div>Loading...</div> : icon}
      </button>
      {children && <Typography variant="primary.r12">{children}</Typography>}
    </StyledSquareButton>
  );
};
