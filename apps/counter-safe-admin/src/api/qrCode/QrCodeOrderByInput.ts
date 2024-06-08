import { SortOrder } from "../../util/SortOrder";

export type QrCodeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isScanned?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
