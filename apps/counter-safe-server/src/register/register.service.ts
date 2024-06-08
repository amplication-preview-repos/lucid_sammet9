import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RegisterServiceBase } from "./base/register.service.base";

@Injectable()
export class RegisterService extends RegisterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
