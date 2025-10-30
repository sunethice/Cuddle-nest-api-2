import { Transform } from "class-transformer";
import { IsBoolean, IsDateString, IsIn, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";

export class addChild{
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsDateString()
    @IsNotEmpty()
    dateOfBirth: string;

    @IsString()
    @IsIn(['male','female'])
    gender: string;

    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => value === 'true' || value === true)
    isSpecialNeed?: boolean;

    @IsOptional()
    @IsObject()
    allergies: Record<string, any>;

}