import * as graphql from "@nestjs/graphql";
import { RegisterResolverBase } from "./base/register.resolver.base";
import { Register } from "./base/Register";
import { RegisterService } from "./register.service";

@graphql.Resolver(() => Register)
export class RegisterResolver extends RegisterResolverBase {
  constructor(protected readonly service: RegisterService) {
    super(service);
  }
}
