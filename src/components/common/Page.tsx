import { FC } from "react";
import styled from "styled-components";
import clsx from "clsx";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  hug?: "edge";
  showRight?: boolean;
  showStylists?: boolean;
  showGetMoonsift?: boolean;
  selected?: string;
  showCreators?: boolean;
  showNavControls?: boolean;
  isLanding?: boolean;
  children: React.ReactNode;
};

const UnstyledPage: FC<Props> = ({
  className,
  style,
  hug,
  selected,
  showRight,
  showStylists = true,
  showGetMoonsift = true,
  showCreators,
  showNavControls,
  isLanding,
  children,
}) => {
  return (
    <div
      className={clsx(
        className,
        showNavControls && "Page-withNavControls",
        isLanding && "Page-isLanding"
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export const Page = styled(UnstyledPage)`
  .Page-topMenu {
    height: 56px;
    overflow: hidden;
    margin-bottom: 28px;
  }

  &.Page-withNavControls > .Page-topMenu {
    margin-bottom: calc(8px + 40px + 16px);
  }

  &.Page-isLanding > .Page-topMenu {
    margin-bottom: 0;
  }

  .Page-navControls {
    position: fixed;
    top: calc(56px + 8px);
    z-index: 10;
    margin-bottom: 16px;
  }
`;
