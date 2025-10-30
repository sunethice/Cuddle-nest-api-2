import { IsString, IsOptional } from 'class-validator';

export class AddressDto {
    @IsString()
    unitNumber: string;

    @IsString()
    streetNumber: string;

    @IsString()
    streetName: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsString()
    postcode: string;

    @IsString()
    country: string;
}