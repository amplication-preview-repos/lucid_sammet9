import { QrCodeWhereUniqueInput } from "../qrCode/QrCodeWhereUniqueInput";

export type ScannedCreateInput = {
  location?: string | null;
  qrCode?: QrCodeWhereUniqueInput | null;
  scanDate?: Date | null;
};
