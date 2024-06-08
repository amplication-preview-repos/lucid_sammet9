import { Module } from "@nestjs/common";
import { ScannedModuleBase } from "./base/scanned.module.base";
import { ScannedService } from "./scanned.service";
import { ScannedController } from "./scanned.controller";
import { ScannedResolver } from "./scanned.resolver";

@Module({
  imports: [ScannedModuleBase],
  controllers: [ScannedController],
  providers: [ScannedService, ScannedResolver],
  exports: [ScannedService],
})
export class ScannedModule {}
