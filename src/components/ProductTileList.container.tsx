import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { ProductTileList } from "src/components/ProductTileList";
import { useLocation } from "react-router";
import { Product } from "src/components/types";

interface ProductTileListContainerProps {
  collectionUID: string;
  collectionUserUID: string;
  products: Product[];
  isMine: boolean;
  numberReceived: number;
}

const Container: React.FC<ProductTileListContainerProps> = ({
  collectionUID,
  collectionUserUID,
  products,
  numberReceived,
  isMine,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const nonReceived = products.length === 0;

  const [searchParams] = useSearchParams();

  const showReviewButton = isMine && numberReceived >= 5;

  // TODO: Get from the collection data
  const userViews = 1;

  return (
    <ProductTileList
      {...{
        collectionUID,
        collectionUserUID,
        isMine,
        nonReceived,
        userViews,
        showReviewButton,
        products,
      }}
    />
  );
};

export { Container as ProductTileList };
