import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { Collection as CollectionComponent } from "./Collection.component";
import data from "src/data.json";

const analytics = (event: string, data: any) => {
  console.log(event, data);
};

const CollectionContainer = () => {
  const [collectionUID, setCollectionUID] = useState(data.collectionId);
  const location = useLocation();

  useEffect(() => {
    setCollectionUID(data.collectionId);
  }, [location.pathname]);

  useEffect(() => {
    analytics("WebApp:ViewedOwnCollection", { collectionUID });
  }, []);

  return (
    <CollectionComponent
      collectionUID={collectionUID}
      collectionUserUID={data.collectionUserId}
      collectionName={data.name}
      collectionDescription={data.description}
      collectionViews={data.views}
      isLoading={false}
      isMine={true}
      displayUsername={data.username}
      products={data.products}
    />
  );
};

export { CollectionContainer as Collection };
