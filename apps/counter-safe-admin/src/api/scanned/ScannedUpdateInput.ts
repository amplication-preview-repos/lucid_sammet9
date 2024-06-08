import { QrCodeWhereUniqueInput } from "../qrCode/QrCodeWhereUniqueInput";

export type ScannedUpdateInput = {
  location?: string | null;
  qrCode?: QrCodeWhereUniqueInput | null;
  scanDate?: Date | null;
};
