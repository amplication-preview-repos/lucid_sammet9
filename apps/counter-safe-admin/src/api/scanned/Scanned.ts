import { QrCode } from "../qrCode/QrCode";

export type Scanned = {
  createdAt: Date;
  id: string;
  location: string | null;
  qrCode?: QrCode | null;
  scanDate: Date | null;
  updatedAt: Date;
};
