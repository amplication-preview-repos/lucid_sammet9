import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { RegisterUpdateManyWithoutQrCodesInput } from "./RegisterUpdateManyWithoutQrCodesInput";
import { ScannedUpdateManyWithoutQrCodesInput } from "./ScannedUpdateManyWithoutQrCodesInput";

export type QrCodeUpdateInput = {
  code?: string | null;
  isScanned?: boolean | null;
  product?: ProductWhereUniqueInput | null;
  registers?: RegisterUpdateManyWithoutQrCodesInput;
  scanneds?: ScannedUpdateManyWithoutQrCodesInput;
};
