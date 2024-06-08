/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScannedWhereInput } from "./ScannedWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ScannedOrderByInput } from "./ScannedOrderByInput";

@ArgsType()
class ScannedFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ScannedWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ScannedWhereInput, { nullable: true })
  @Type(() => ScannedWhereInput)
  where?: ScannedWhereInput;

  @ApiProperty({
    required: false,
    type: [ScannedOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ScannedOrderByInput], { nullable: true })
  @Type(() => ScannedOrderByInput)
  orderBy?: Array<ScannedOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ScannedFindManyArgs as ScannedFindManyArgs };
