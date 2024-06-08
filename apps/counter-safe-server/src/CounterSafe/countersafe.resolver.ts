import * as graphql from "@nestjs/graphql";
import { GenerateQrCodeInput } from "../counterSafe/GenerateQrCodeInput";
import { CounterSafeService } from "./countersafe.service";

export class CounterSafeResolver {
  constructor(protected readonly service: CounterSafeService) {}

  @graphql.Mutation(() => [String])
  async GenerateQrCode(
    @graphql.Args()
    args: GenerateQrCodeInput
  ): Promise<string[]> {
    return this.service.GenerateQrCode(args);
  }

  @graphql.Mutation(() => String)
  async RegisterQrCode(
    @graphql.Args()
    args: GenerateQrCodeInput
  ): Promise<string> {
    return this.service.RegisterQrCode(args);
  }

  @graphql.Mutation(() => String)
  async ScanQrCode(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ScanQrCode(args);
  }
}
