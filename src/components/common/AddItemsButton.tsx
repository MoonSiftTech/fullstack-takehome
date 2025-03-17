import styled from "styled-components";
import { AddCircleIcon } from "src/components/ui";
import { SquareButton } from "src/components/common/SquareButton";

export const UnstyledAddItemsButton = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <SquareButton className={className} style={style} icon={<AddCircleIcon />}>
      Add items
    </SquareButton>
  );
};

export const AddItemsButton = styled(UnstyledAddItemsButton)``;
