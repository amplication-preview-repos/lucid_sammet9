import { QrCodeWhereUniqueInput } from "../qrCode/QrCodeWhereUniqueInput";

export type RegisterCreateInput = {
  qrCode?: QrCodeWhereUniqueInput | null;
};
