import React from "react";
import { ProductTile } from "src/components/ProductTile";
import { Product } from "src/components/types";
import { getDomain } from "src/utils/getDomain";
import data from "src/data.json";

interface ProductTileContainerProps {
  itemUID: string;
  collectionUserUID: string;
  collectionUID: string;
  choosingCoverImage: boolean;
  isMine: boolean;
  isLoaded: boolean;
  selectCover: () => void;
  product: Product;
}

const Container: React.FC<ProductTileContainerProps> = ({
  itemUID,
  collectionUserUID,
  collectionUID,
  choosingCoverImage,
  isMine,
  isLoaded,
  selectCover,
}) => {
  const productData = (data.products as Product[]).find(
    (product) => product.id === itemUID
  );

  // Map to props:
  const thisProductImage = productData?.image ?? "";
  const description = productData ? productData.description : null;
  const domain = getDomain(productData?.url ?? "");
  const price = productData ? productData.price : null;
  const quantity = productData ? productData.quantity : 1;
  return (
    <ProductTile
      {...{
        isMine,
        isLoaded,
        choosingCoverImage,
        url: productData?.url ?? "",
        description,
        price,
        quantity,
        domain,
        thisProductImage,
        collectionUserUID,
        collectionUID,
        selectCover,
        itemUID,
        product: productData,
      }}
    />
  );
};

export { Container as ProductTile };
