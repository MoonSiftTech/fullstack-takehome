import React, { useState } from "react";
import styled from "styled-components";

interface EmptyMessageOwnCollectionProps {
  className?: string;
  style?: React.CSSProperties;
  onAddItems?: () => void;
}

const EmptyMessageOwnCollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const AddItemButton = styled.div`
  width: 76px;
  height: 76px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 30px;
  margin-bottom: 12px;
  width: 100%;
  cursor: pointer;
`;

const PrimaryBlackButton = styled(Button)`
  background-color: black;
  color: white;
  border: none;
`;

const PrimaryWhiteButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
`;

const DescriptionText = styled.p`
  color: #666;
  max-width: 286px;
  margin-top: 12px;
`;

export const EmptyMessageOwnCollection: React.FC<
  EmptyMessageOwnCollectionProps
> = ({ className, style, onAddItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAddItems = () => {
    setIsMenuOpen(false);
    onAddItems?.();
  };

  return (
    <EmptyMessageOwnCollectionContainer className={className} style={style}>
      <AddItemButton onClick={() => setIsMenuOpen(true)}>
        <img
          src="/static/empty-collection-add-icon.svg"
          alt="Add Items"
          style={{ width: "40px", height: "40px" }}
        />
      </AddItemButton>
      <p>Add items</p>

      <ButtonContainer>
        <PrimaryWhiteButton onClick={() => {}}>
          How to add items
        </PrimaryWhiteButton>
        <PrimaryBlackButton onClick={() => {}}>
          View popular stores
        </PrimaryBlackButton>
      </ButtonContainer>

      <DescriptionText>
        Visit any store in the world and start adding items with Moonsift's
        extension or app
      </DescriptionText>
    </EmptyMessageOwnCollectionContainer>
  );
};
