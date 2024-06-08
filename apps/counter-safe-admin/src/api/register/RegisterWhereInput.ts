import { StringFilter } from "../../util/StringFilter";
import { QrCodeWhereUniqueInput } from "../qrCode/QrCodeWhereUniqueInput";

export type RegisterWhereInput = {
  id?: StringFilter;
  qrCode?: QrCodeWhereUniqueInput;
};
