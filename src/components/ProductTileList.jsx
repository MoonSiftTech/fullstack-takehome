import styled from "styled-components";
import { TEXTSTYLE } from "src/components/common/Text";
import CollectionSubSection from "src/components/CollectionSubSection";
import { EmptyMessageOwnCollection } from "src/components/common/EmptyMessageOwnCollection";
import { CtaButton, HeartIcon } from "src/components/ui";

export const CentralHeading3 = styled(TEXTSTYLE.HEADING3)`
  text-align: center;
  max-width: 305px;
  padding: 12px;
  margin: 0 auto;
`;

export const CentralHeading5 = styled(TEXTSTYLE.HEADING5)`
  text-align: center;
  padding: 12px;
`;

export const CentralText3 = styled(TEXTSTYLE.BODY3)`
  text-align: center;
  margin-bottom: 10px;
`;

const TilesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 15px;
  width: 100%;
  margin-top: -16px;
  margin-bottom: ${(props) => (props.isLoggedIn ? "155px" : "93px")};
  box-sizing: border-box;
  max-width: 1168px;
`;

export const BoldLink = styled(TEXTSTYLE.LINK)`
  padding: 0 0 2px;
  font-weight: normal;
  border-bottom: 1px solid black;
`;

export const AddManuallyButtonContainer = styled.div`
  display: flex;
  margin-top: 36px;
`;

export const AddManuallyButtonContainerWithItems = styled.div`
  display: flex;
  margin-top: -36px;
  flex-direction: column;
`;

export const ProductTileList = ({
  collectionUID,
  collectionUserUID,
  nonReceived,
  isMine,
  userViews,
  showReviewButton,
  products,
}) => {
  if (nonReceived) {
    return <EmptyMessageOwnCollection openAddItemModal={openAddItemModal} />;
  } else {
    const localSubsectionOrder = [1];
    return (
      <>
        <TilesContainer isLoggedIn>
          {localSubsectionOrder.map((thisSubsectionUID, index) => (
            <CollectionSubSection
              key={thisSubsectionUID}
              index={index}
              uid={thisSubsectionUID}
              productTiles={products}
              collectionUserUID={collectionUserUID}
              collectionUID={collectionUID}
              userViews={userViews}
              isMine={isMine}
            />
          ))}
        </TilesContainer>
        <AddManuallyButtonContainerWithItems>
          {showReviewButton && (
            <CtaButton
              size="medium"
              style={{ width: "300px" }}
              variant="primary-white-grey"
              onClick={openReviewModal}
              startIcon={<HeartIcon />}
            >
              Are you enjoying Moonsift?
            </CtaButton>
          )}
        </AddManuallyButtonContainerWithItems>
      </>
    );
  }
};
