import { SortOrder } from "../../util/SortOrder";

export type RegisterOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  qrCodeId?: SortOrder;
  updatedAt?: SortOrder;
};
