/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { Type } from "class-transformer";
import { RegisterUpdateManyWithoutQrCodesInput } from "./RegisterUpdateManyWithoutQrCodesInput";
import { ScannedUpdateManyWithoutQrCodesInput } from "./ScannedUpdateManyWithoutQrCodesInput";

@InputType()
class QrCodeUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isScanned?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RegisterUpdateManyWithoutQrCodesInput,
  })
  @ValidateNested()
  @Type(() => RegisterUpdateManyWithoutQrCodesInput)
  @IsOptional()
  @Field(() => RegisterUpdateManyWithoutQrCodesInput, {
    nullable: true,
  })
  registers?: RegisterUpdateManyWithoutQrCodesInput;

  @ApiProperty({
    required: false,
    type: () => ScannedUpdateManyWithoutQrCodesInput,
  })
  @ValidateNested()
  @Type(() => ScannedUpdateManyWithoutQrCodesInput)
  @IsOptional()
  @Field(() => ScannedUpdateManyWithoutQrCodesInput, {
    nullable: true,
  })
  scanneds?: ScannedUpdateManyWithoutQrCodesInput;
}

export { QrCodeUpdateInput as QrCodeUpdateInput };
