import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QrCodeWhereUniqueInput } from "../qrCode/QrCodeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ScannedWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  qrCode?: QrCodeWhereUniqueInput;
  scanDate?: DateTimeNullableFilter;
};
