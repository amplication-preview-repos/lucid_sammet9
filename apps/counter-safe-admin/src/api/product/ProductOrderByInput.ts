import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
