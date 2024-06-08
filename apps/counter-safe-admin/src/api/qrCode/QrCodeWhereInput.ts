import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { RegisterListRelationFilter } from "../register/RegisterListRelationFilter";
import { ScannedListRelationFilter } from "../scanned/ScannedListRelationFilter";

export type QrCodeWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  isScanned?: BooleanNullableFilter;
  product?: ProductWhereUniqueInput;
  registers?: RegisterListRelationFilter;
  scanneds?: ScannedListRelationFilter;
};
