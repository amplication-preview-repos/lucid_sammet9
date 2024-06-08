import { Module } from "@nestjs/common";
import { CounterSafeService } from "./countersafe.service";
import { CounterSafeController } from "./countersafe.controller";
import { CounterSafeResolver } from "./countersafe.resolver";

@Module({
  controllers: [CounterSafeController],
  providers: [CounterSafeService, CounterSafeResolver],
  exports: [CounterSafeService],
})
export class CounterSafeModule {}
