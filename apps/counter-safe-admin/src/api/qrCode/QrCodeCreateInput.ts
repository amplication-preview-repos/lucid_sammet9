import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { RegisterCreateNestedManyWithoutQrCodesInput } from "./RegisterCreateNestedManyWithoutQrCodesInput";
import { ScannedCreateNestedManyWithoutQrCodesInput } from "./ScannedCreateNestedManyWithoutQrCodesInput";

export type QrCodeCreateInput = {
  code?: string | null;
  isScanned?: boolean | null;
  product?: ProductWhereUniqueInput | null;
  registers?: RegisterCreateNestedManyWithoutQrCodesInput;
  scanneds?: ScannedCreateNestedManyWithoutQrCodesInput;
};
