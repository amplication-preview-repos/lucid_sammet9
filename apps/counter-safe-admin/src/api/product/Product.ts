import { QrCode } from "../qrCode/QrCode";

export type Product = {
  category: string | null;
  createdAt: Date;
  expiryDate: Date | null;
  id: string;
  name: string | null;
  qrCodes?: Array<QrCode>;
  quantity: number | null;
  updatedAt: Date;
};
