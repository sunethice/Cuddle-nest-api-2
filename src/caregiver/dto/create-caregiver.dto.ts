import { Type } from "class-transformer";
import { IsString, IsOptional, IsEmail, IsPhoneNumber, ValidateNested, IsDate, IsArray, IsJSON, IsBoolean, IsInt, IsNumber } from "class-validator";
import { AddressDto } from "src/address/dto/address.dto";

export class createCaregiverDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('AU')
    phoneNumber: string;

    @Type(() => Date)
    @IsDate()
    dateOfBirth: Date;

    @IsString()
    gender: string;

    @IsString()
    profilePicture: string;

    @ValidateNested()
    @Type(() => AddressDto)
    @IsOptional()
    address?: AddressDto;

    @IsArray()
    @IsString({each : true})
    language :  string[];

    @IsOptional()
    @IsArray()
    @IsString({each : true})
    certifications?: string[];

    @IsInt()
    experience: number;

    @IsArray()
    @IsString({ each: true })
    availability: string[];

    @IsBoolean()
    policeCheck: boolean;

    @IsBoolean()
    workingWithChildrenCheck: boolean;

    @IsNumber()
    rating: number;

    @IsInt()
    reviewCount: number;

    @IsBoolean()
    verified: boolean;

    @IsBoolean()
    status: boolean;

    @IsString()
    bio: string;
}