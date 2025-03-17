import { Product } from "src/types";

export type CollectionModalName =
  | "share"
  | "edit"
  | "notifications"
  | "addAnItem"
  | "generateVideo"
  | "addDeliveryInfo"
  | "addCashFund";

export interface CollectionContainerProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface CollectionProps extends CollectionContainerProps {
  collectionUID: string;
  collectionUserUID: string;
  collectionName: string;
  collectionDescription?: string;
  products: Product[];
  collectionViews: number;
  isLoading: boolean;
  isMine: boolean;
  displayUsername: string;
}
