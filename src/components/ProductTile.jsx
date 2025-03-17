import clsx from "clsx";
import styled, { css } from "styled-components";
import {
  AddCircleIcon,
  CheckCircleIcon,
  HangerIcon,
  EditIcon,
} from "src/components/ui";
import { M } from "src/components/common/constants";
import { TEXTSTYLE } from "src/components/common/Text";
import { MEDIA } from "src/components/common/media";
import { Stack, AISearchIcon } from "src/components/ui";

const CopilotButtonIconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.fns.getColor("background.purple")};
`;

const CopilotButtonExtended = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.fns.getColor("background.purple")};
  opacity: 0;
`;

const CopilotButtonContainerBase = css`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  width: 48px;
  height: 48px;
  padding-left: 12px;
  overflow: hidden;
  border-radius: 24px;
  background-color: ${M.COL.BG.WHITE};
`;

const CopilotContainerMobile = styled.div`
  ${CopilotButtonContainerBase}
`;

const CopilotButtonContainer = styled.div`
  @keyframes grow {
    from {
      width: 48px;
    }
    to {
      width: 162px;
    }
  }
  @keyframes shrink {
    from {
      width: 162px;
    }
    to {
      width: 48px;
    }
  }

  ${CopilotButtonContainerBase}
  animation-name: shrink;
  animation-duration: 0.1s;
  opacity: 0;
  transition: opacity 0.1s ease-in;

  &:hover {
    width: 162px;
    border-radius: 5px 24px 24px 0;
    animation-name: grow;
    animation-duration: 0.1s;

    ${CopilotButtonExtended} {
      opacity: 1;
      transition: opacity 0.1s ease-in;
      transition-delay: 0.1s;
    }
  }
`;

const TileContainer = styled.div`
  width: 250px;
  background-color: ${M.COL.BG.WHITE};
  border: 0.5px solid ${M.COL.LINE.MID};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  break-inside: avoid;

  &:hover {
    ${CopilotButtonContainer} {
      opacity: 1;
    }
  }
`;

const TileContainerBorder = styled.div`
  background-color: ${M.COL.BG.WHITE};
  border: 0.5px transparent #cecfd1;
  border-radius: 7px;
  display: flex;
  margin: 16px;
  margin-bottom: 26px;

  &.ProductTile-dimmed {
    opacity: 0.5;
  }
`;

const MetaContainer = styled.div`
  width: 100%;
  padding: 0.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const BottomContainer = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  align-items: center;
`;

const RightIcon = styled.img`
  height: 16px;
  padding-left: 5px;
  cursor: pointer;
  display: inline-block;
  flex-shrink: 0;
`;

const LeftIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  flex-shrink: 0;
`;

const RightLinkContainer = styled.span`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  flex-shrink: 1;
  overflow: hidden;
`;

const DomainText = styled(TEXTSTYLE.OTHER4)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex-shrink: 1;
  width: 100%;
  text-align: right;
`;

const LeftIconCSS = css`
  height: 30px;
  width: 30px;
  margin: 6px 0px;
  cursor: pointer;
  background-image: url("${(props) => props.bGURL}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
  border-radius: 15px;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const LeftIcon = styled.div`
  &:focus {
    outline: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  ${LeftIconCSS}
`;

const ProductImage = styled.img`
  width: auto;
  height: auto;
  max-height: 302px;
  max-width: 248px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  height: 320px;
  &:focus {
    outline: none;
  }
`;

const ProductImageClickContainer = styled(TEXTSTYLE.LINKA)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;

const Product = styled.div`
  position: relative;
`;

const ProductFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-align: left;
`;

const OptionsButtonContainer = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 24px;
  background-color: ${M.COL.BG.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionsButtonContentWrapper = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  cursor: pointer;
  &:active {
    outline: none;
  }
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const DescriptionAndPriceContainer = styled.div`
  margin-bottom: 0.75rem;
  min-height: 2.5rem;
`;

const DescriptionContainer = styled(TEXTSTYLE.BODY5)`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex-shrink: 0;
  margin-bottom: 0.25rem;
`;

const PriceAndQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  overflow: hidden;
  cursor: pointer;
`;

const QuantityContainer = styled.div`
  cursor: pointer;
`;

const IconContainer = styled.div`
  position: relative;
  right: 7px;
  cursor: pointer;
`;

const Quantity = styled.span`
  color: ${({ theme }) => theme.fns.getColor("background.purple")};
`;

export const ProductTile = ({
  isMine,
  isLoaded,
  description,
  price,
  url,
  quantity,
  domain,
  thisProductImage,
  collectionUserUID,
  collectionUID,
  itemUID,
  product,
}) => {
  const renderIconButtons = () => {
    if (isMine === true) {
      return (
        <>
          <IconContainer>
            <LeftIcon
              bGURL={MEDIA.SMALL_BIN}
              alt="Remove product from this collection"
            />
          </IconContainer>
        </>
      );
    } else {
      return <></>;
    }
  };

  const renderUpdatedSymbol = () => {
    return "";
  };

  const renderPriceSymbol = () => {
    return "";
  };

  const shouldDim = false;

  const renderTile = () => {
    return (
      <>
        <TileContainerBorder
          className={clsx(shouldDim && "ProductTile-dimmed")}
        >
          <TileContainer>
            <Product>
              <ProductFlex>
                <ImageContainer>
                  <ProductImageClickContainer>
                    <ProductImage
                      src={
                        thisProductImage ?? MEDIA.BACKEND_SCRAPING_IN_PROGRESS
                      }
                    />
                  </ProductImageClickContainer>
                </ImageContainer>
                <MetaContainer>
                  <DescriptionAndPriceContainer>
                    <DescriptionContainer>{description}</DescriptionContainer>
                    <PriceAndQuantityContainer>
                      <PriceContainer>
                        <TEXTSTYLE.OTHER4>{price}</TEXTSTYLE.OTHER4>
                        {renderUpdatedSymbol()}
                        {renderPriceSymbol()}
                      </PriceContainer>
                      {(quantity ?? 1) > 1 && (
                        <QuantityContainer>
                          <TEXTSTYLE.OTHER4>
                            <Quantity>x {quantity ?? 1}</Quantity>
                          </TEXTSTYLE.OTHER4>
                        </QuantityContainer>
                      )}
                    </PriceAndQuantityContainer>
                  </DescriptionAndPriceContainer>
                  {isMine && (
                    <BottomContainer>
                      <LeftIconContainer>
                        {renderIconButtons()}
                      </LeftIconContainer>
                      <RightLinkContainer>
                        <a
                          href={url}
                          style={{ textDecoration: "none", color: "inherit" }}
                          target="_blank"
                        >
                          <Stack direction="row" alignItems="center">
                            <DomainText>{domain}</DomainText>
                            <RightIcon src={MEDIA.OPEN_RETAILER} />
                          </Stack>
                        </a>
                      </RightLinkContainer>
                    </BottomContainer>
                  )}
                </MetaContainer>
              </ProductFlex>
              <CopilotContainerMobile>
                <CopilotButtonIconWrapper>
                  <AISearchIcon size={28} />
                </CopilotButtonIconWrapper>
              </CopilotContainerMobile>
              <OptionsButtonContainer>
                <OptionsButtonContentWrapper>
                  <AddCircleIcon />
                </OptionsButtonContentWrapper>
              </OptionsButtonContainer>
            </Product>
          </TileContainer>
        </TileContainerBorder>
      </>
    );
  };
  return isLoaded ? renderTile() : <></>;
};

export default ProductTile;
