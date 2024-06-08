import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScannedService } from "./scanned.service";
import { ScannedControllerBase } from "./base/scanned.controller.base";

@swagger.ApiTags("scanneds")
@common.Controller("scanneds")
export class ScannedController extends ScannedControllerBase {
  constructor(protected readonly service: ScannedService) {
    super(service);
  }
}
