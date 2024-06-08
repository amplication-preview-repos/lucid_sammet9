import { SortOrder } from "../../util/SortOrder";

export type ScannedOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  qrCodeId?: SortOrder;
  scanDate?: SortOrder;
  updatedAt?: SortOrder;
};
