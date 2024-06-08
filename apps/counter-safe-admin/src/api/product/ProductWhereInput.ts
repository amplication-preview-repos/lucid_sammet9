import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QrCodeListRelationFilter } from "../qrCode/QrCodeListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  category?: StringNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  qrCodes?: QrCodeListRelationFilter;
  quantity?: IntNullableFilter;
};
