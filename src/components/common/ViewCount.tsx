import React from "react";
import styled from "styled-components";

interface ViewCountProps {
  count: number;
  className?: string;
  style?: React.CSSProperties;
}

const ViewCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ViewIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 3.75C5.83333 3.75 2.275 6.34167 1 10C2.275 13.6583 5.83333 16.25 10 16.25C14.1667 16.25 17.725 13.6583 19 10C17.725 6.34167 14.1667 3.75 10 3.75ZM10 14.1667C7.70833 14.1667 5.83333 12.2917 5.83333 10C5.83333 7.70833 7.70833 5.83333 10 5.83333C12.2917 5.83333 14.1667 7.70833 14.1667 10C14.1667 12.2917 12.2917 14.1667 10 14.1667ZM10 7.5C8.61667 7.5 7.5 8.61667 7.5 10C7.5 11.3833 8.61667 12.5 10 12.5C11.3833 12.5 12.5 11.3833 12.5 10C12.5 8.61667 11.3833 7.5 10 7.5Z"
      fill="currentColor"
    />
  </svg>
);

export const ViewCount: React.FC<ViewCountProps> = ({
  count,
  className,
  style,
}) => {
  return (
    <ViewCountContainer className={className} style={style}>
      <ViewIcon />
      <span style={{ fontSize: "12px", color: "currentColor" }}>{count}</span>
    </ViewCountContainer>
  );
};
