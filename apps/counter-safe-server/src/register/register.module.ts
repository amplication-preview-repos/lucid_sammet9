import { Module } from "@nestjs/common";
import { RegisterModuleBase } from "./base/register.module.base";
import { RegisterService } from "./register.service";
import { RegisterController } from "./register.controller";
import { RegisterResolver } from "./register.resolver";

@Module({
  imports: [RegisterModuleBase],
  controllers: [RegisterController],
  providers: [RegisterService, RegisterResolver],
  exports: [RegisterService],
})
export class RegisterModule {}
