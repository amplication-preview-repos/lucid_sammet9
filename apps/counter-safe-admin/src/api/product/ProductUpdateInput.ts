import { QrCodeUpdateManyWithoutProductsInput } from "./QrCodeUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: string | null;
  expiryDate?: Date | null;
  name?: string | null;
  qrCodes?: QrCodeUpdateManyWithoutProductsInput;
  quantity?: number | null;
};
