import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CounterSafeService } from "./countersafe.service";

@swagger.ApiTags("counterSafes")
@common.Controller("counterSafes")
export class CounterSafeController {
  constructor(protected readonly service: CounterSafeService) {}

  @common.Post("/generate-qr-code")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateQrCode(
    @common.Body()
    body: string
  ): Promise<string[]> {
        return this.service.GenerateQrCode(body);
      }

  @common.Post("/register-qr-code")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterQrCode(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RegisterQrCode(body);
      }

  @common.Post("/scan-qr-code")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScanQrCode(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ScanQrCode(body);
      }
}
