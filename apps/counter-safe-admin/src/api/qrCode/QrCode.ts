import { Product } from "../product/Product";
import { Register } from "../register/Register";
import { Scanned } from "../scanned/Scanned";

export type QrCode = {
  code: string | null;
  createdAt: Date;
  id: string;
  isScanned: boolean | null;
  product?: Product | null;
  registers?: Array<Register>;
  scanneds?: Array<Scanned>;
  updatedAt: Date;
};
