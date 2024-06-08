import { QrCode } from "../qrCode/QrCode";

export type Register = {
  createdAt: Date;
  id: string;
  qrCode?: QrCode | null;
  updatedAt: Date;
};
