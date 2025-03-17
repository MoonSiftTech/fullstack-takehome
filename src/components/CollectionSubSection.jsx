import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Typography } from "src/components/ui";
import { M } from "src/components/common/constants";
import { MEDIA } from "src/components/common/media";
import { TEXTSTYLE } from "src/components/common/Text";
import { ProductTile } from "src/components/ProductTileContainer";

const MAX_WIDTH_TILES = "1104px";

const SubSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
  box-sizing: border-box;
`;

const SubSectionHeaderContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const SubSectionHeader = styled.div`
  display: flex;
  width: 100%;
  max-width: ${MAX_WIDTH_TILES};
  box-sizing: border-box;
  margin-bottom: 8px;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 6px;
`;

const SubSectionTitleButton = styled(TEXTSTYLE.LINKA)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 3px;
  &:hover {
    box-shadow: ${(props) =>
      props.enabled !== false ? "0px 1px 2px rgba(0, 0, 0, 0.25)" : "none"};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.enabled !== false ? 1.0 : 0.5)};
  cursor: ${(props) => (props.enabled !== false ? "pointer" : "auto")};
`;

const SubSectionTitleButtonImage = styled.img`
  height: 20px;
  width: 20px;
`;

const TextInputContainer = styled.div`
  margin-right: 8px;
`;

const FinalLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${M.COL.LINE.MID};
  max-width: ${MAX_WIDTH_TILES};
`;

const FinalLineContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  box-sizing: border-box;

  ${({ theme }) => theme.fns.getMediaQuery({ minWidth: "md" })} {
    margin-top: 20px;
    margin-bottom: 12px;
  }
`;

const EmptyMessage = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  box-sizing: border-box;
  max-width: ${MAX_WIDTH_TILES};
  display: flex;
  margin: 24px 0px;
`;

const ProductTileListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;

  ${({ theme }) => theme.fns.getMediaQuery({ minWidth: "sm" })} {
    justify-content: flex-start;
  }
`;

const ProductTileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tooltip = styled.div`
  width: ${(props) => (props.is_purchased ? "230px" : "160px")};
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  align-content: center;
  justify-content: center;
  text-align: left;
  z-index: 1000;
  position: absolute;
`;

const TooltipText = styled(TEXTSTYLE.BODY5)`
  padding: 10px;
`;

const ToolTipContainer = styled.div`
  color: default;
`;

const ToolTipTriggerContainer = styled.div`
  color: default;
`;

const UnstyledSubSection = ({
  className,
  index,
  subsectionInfo,
  subsectionList,
  uid,
  productTiles,
  moveItem,
  addSubsection,
  addOrRemoveItemToSubsection,
  deleteSubsection,
  moveSubsection,
  updateSubsectionName,
  isPro,
  isMine,
  doFocusSubsectionTextbox,
  isOrganising,
  collectionUserUID,
  collectionUID,
  showProductModal,
  userViews,
  choosingCoverImage,
  coverImageDict,
  selectCover,
}) => {
  const product_tiles = productTiles ?? [];

  const renderSubsectionHeader = () => {
    return !subsectionInfo ? null : isOrganising ? (
      <SubSectionHeaderContainer>
        <SubSectionHeader>
          <TextInputContainer>
            <input
              placeholder="Name this section"
              onChange={(event) => updateSubsectionName(uid, event)}
              name="subsection_name"
              value={subsectionInfo.name}
              width="300px"
              key="collection_name"
              focusOnMount={doFocusSubsectionTextbox}
            />
          </TextInputContainer>
          <SubSectionTitleButton
            enabled={true}
            key="up"
            href="#"
            onClick={(event) => moveSubsection(uid, "back", event)}
          >
            <SubSectionTitleButtonImage src={MEDIA.UP_ARROW} />
          </SubSectionTitleButton>
          <SubSectionTitleButton
            enabled={true}
            key="down"
            href="#"
            onClick={(event) => moveSubsection(uid, "forward", event)}
          >
            <SubSectionTitleButtonImage src={MEDIA.DOWN_ARROW} />
          </SubSectionTitleButton>
        </SubSectionHeader>
      </SubSectionHeaderContainer>
    ) : (
      <SubSectionHeaderContainer>
        <Typography
          className="CollectionSubSection-subsectionName"
          variant="primary.b18"
          component="h2"
        >
          {subsectionInfo.name}
        </Typography>
      </SubSectionHeaderContainer>
    );
  };

  const renderProductTiles = () => {
    return (
      <ProductTileListContainer>
        {product_tiles.length > 0 ? (
          product_tiles.map(({ id }) => {
            return (
              <ProductTileContainer key={id}>
                <ProductTile
                  isOrganising={isOrganising}
                  itemUID={id}
                  collectionUserUID={collectionUserUID}
                  collectionUID={collectionUID}
                  showProductModal={showProductModal}
                  viewingData={userViews ? userViews[id] : undefined}
                  choosingCoverImage={choosingCoverImage}
                  coverImageDict={coverImageDict}
                  selectCover={selectCover}
                  isLoaded
                  isMine={isMine}
                />
              </ProductTileContainer>
            );
          })
        ) : // case has no products:
        isOrganising && subsectionInfo ? (
          <EmptyMessage>
            <TEXTSTYLE.BODY4>
              Use the + icon under each product tile to add or remove items from
              a section
            </TEXTSTYLE.BODY4>
          </EmptyMessage>
        ) : null}
      </ProductTileListContainer>
    );
  };

  return (
    <SubSectionContainer className={className}>
      {renderSubsectionHeader()}
      {renderProductTiles()}
      {!subsectionInfo ? null : (
        <FinalLineContainer>
          <FinalLine />
        </FinalLineContainer>
      )}
    </SubSectionContainer>
  );
};

const SubSection = styled(UnstyledSubSection)`
  .CollectionSubSection-subsectionName {
    margin-top: 16px;
    margin-bottom: 0;

    ${({ theme }) => theme.fns.getMediaQuery({ minWidth: "md" })} {
      margin-bottom: 10px;

      ${({ theme }) => theme.fns.getTypographyStyles("primary.b26")}
    }
  }
`;

export default SubSection;
