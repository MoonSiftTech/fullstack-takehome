import styled from "styled-components";
import clsx from "clsx";
import { Helmet } from "react-helmet";
import {
  Typography,
  Stack,
  ShareIcon,
  EditIcon,
  OptionsIcon,
} from "src/components/ui";

import { Page } from "src/components/common/Page";
import { ProductTileList } from "src/components/ProductTileList.container";
import { ViewCount } from "src/components/common/ViewCount";
import { SquareButton } from "src/components/common/SquareButton";
import { CollectionProps } from "./Collection.types";
import { AddItemsButton } from "src/components/common/AddItemsButton";

const UnstyledCollection = ({
  className,
  collectionName,
  collectionDescription,
  collectionViews,
  collectionUID,
  collectionUserUID,
  isMine,
  products,
}: CollectionProps) => {
  const showCommissionable = true;

  return (
    <Page className={clsx(className)} hug="edge" showNavControls>
      <Stack
        className="Collection-innerContainer"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          className="Collection-collectionName"
          variant="primary.b34"
          align="center"
          component="h1"
        >
          {collectionName}
          <OptionsIcon />
        </Typography>
        {collectionDescription && (
          <Typography
            className="Collection-collectionDescription"
            variant="primary.l16"
            align="center"
            component="p"
          >
            {collectionDescription}
          </Typography>
        )}
        <Stack
          className="Collection-metaInfo"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={16}
        >
          {collectionViews > 1 && <ViewCount count={collectionViews} />}
        </Stack>
        <Stack
          className="Collection-controls"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <>
            {isMine && <SquareButton icon={<EditIcon />}>Edit</SquareButton>}
            {isMine && <AddItemsButton />}
            <SquareButton icon={<ShareIcon />}>Share</SquareButton>
          </>
        </Stack>

        <Stack
          className={clsx(
            "Collection-commissionableContainer",
            !showCommissionable &&
              "Collection-commissionableHideContainerOnMobile"
          )}
        >
          {showCommissionable && (
            <Typography
              className="Collection-commissionableText"
              variant="primary.r12"
              align="right"
              component="p"
            >
              Commissionable
            </Typography>
          )}
        </Stack>

        <Helmet>
          <title>{collectionName} - Moonsift</title>
          <meta property="og:title" content={collectionName} />
        </Helmet>
        <ProductTileList
          collectionUID={collectionUID}
          collectionUserUID={collectionUserUID}
          isMine={isMine}
          products={products}
          numberReceived={products.length}
        />
      </Stack>
    </Page>
  );
};

export const Collection = styled(UnstyledCollection)`
  margin-bottom: 40px;

  .Collection-innerContainer {
    margin: 0 16px;
  }

  .Collection-collectionName {
    ${({ theme }) => theme.fns.getMediaQuery({ minWidth: "md" })} {
      ${({ theme }) => theme.fns.getTypographyStyles("primary.b42")}
    }
  }

  .Collection-collectionName,
  .Collection-collectionDescription {
    max-width: 536px;
    margin-bottom: 12px;
    white-space: pre-line;

    ${({ theme }) => theme.fns.getMediaQuery({ minWidth: "md" })} {
      margin-bottom: 16px;
    }
  }

  .Collection-commissionableContainer {
    padding: 0px 32px;
    height: 32px;
    align-items: flex-end;
    width: 100%;
    max-width: 1152px;
    ${({ theme }) => theme.fns.getMediaQuery({ maxWidth: "sm" })} {
      width: 248px;
      padding: 0px;
    }
  }

  .Collection-commissionableHideContainerOnMobile {
    ${({ theme }) => theme.fns.getMediaQuery({ maxWidth: "sm" })} {
      display: none;
    }
  }

  .Collection-commissionableText {
    color: ${({ theme }) => theme.fns.getColor("grey.4")};
  }

  .Collection-metaInfo {
    margin-bottom: 28px;

    ${({ theme }) => theme.fns.getMediaQuery({ minWidth: "md" })} {
      margin-bottom: 32px;
    }
  }

  &:not(.Collection-isPro) .Collection-organisingSaveButton {
    width: 252px;
  }

  .Collection-organisingSectionButton {
    margin-left: 16px;
  }

  .Collection-floatingOrganisingSaveButton {
    padding: 7px 10px;
    position: fixed;
    right: 26px;
    bottom: 26px;
    z-index: 100;

    ${({ theme }) => theme.fns.getMediaQuery({ maxWidth: "md" })} {
      display: none;
    }
  }

  .Collection-additionalControlsWrapper {
    margin-bottom: 40px;
    ${({ theme }) => theme.fns.getMediaQuery({ minWidth: "md" })} {
      margin-bottom: 36px;
    }
  }

  .Collection-addCollectionInfoButton {
    width: 320px;
    max-width: 320px;
    border: 1px solid ${({ theme }) => theme.fns.getColor("grey.4")} !important;
    color: black !important;

    &:hover {
      box-shadow: 0px 3px 6px 0px #00000040;
      border: 1px solid ${({ theme }) => theme.fns.getColor("common.black")} !important;
    }

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
