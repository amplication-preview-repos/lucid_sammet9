import { QrCodeCreateNestedManyWithoutProductsInput } from "./QrCodeCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: string | null;
  expiryDate?: Date | null;
  name?: string | null;
  qrCodes?: QrCodeCreateNestedManyWithoutProductsInput;
  quantity?: number | null;
};
