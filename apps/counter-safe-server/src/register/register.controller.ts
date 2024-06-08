import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RegisterService } from "./register.service";
import { RegisterControllerBase } from "./base/register.controller.base";

@swagger.ApiTags("registers")
@common.Controller("registers")
export class RegisterController extends RegisterControllerBase {
  constructor(protected readonly service: RegisterService) {
    super(service);
  }
}
