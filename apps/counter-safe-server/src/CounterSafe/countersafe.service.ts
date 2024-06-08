import { Injectable } from "@nestjs/common";
import { GenerateQrCodeInput } from "../counterSafe/GenerateQrCodeInput";

@Injectable()
export class CounterSafeService {
  constructor() {}
  async GenerateQrCode(args: GenerateQrCodeInput): Promise<string[]> {
    throw new Error("Not implemented");
  }
  async RegisterQrCode(args: GenerateQrCodeInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ScanQrCode(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
