import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScannedServiceBase } from "./base/scanned.service.base";

@Injectable()
export class ScannedService extends ScannedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
