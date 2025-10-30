import { Type } from "class-transformer";
import { IsString, IsOptional, IsEmail, IsPhoneNumber, ValidateNested, IsArray } from "class-validator";
import { AddressDto } from "src/address/dto/address.dto";

export class createParentDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('AU')
    phoneNumber: string;

    @IsArray()
    @IsString({ each: true })
    language: string[];

    @ValidateNested()
    @Type(() => AddressDto)
    @IsOptional()
    address?: AddressDto;
}