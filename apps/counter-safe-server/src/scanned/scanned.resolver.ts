import * as graphql from "@nestjs/graphql";
import { ScannedResolverBase } from "./base/scanned.resolver.base";
import { Scanned } from "./base/Scanned";
import { ScannedService } from "./scanned.service";

@graphql.Resolver(() => Scanned)
export class ScannedResolver extends ScannedResolverBase {
  constructor(protected readonly service: ScannedService) {
    super(service);
  }
}
