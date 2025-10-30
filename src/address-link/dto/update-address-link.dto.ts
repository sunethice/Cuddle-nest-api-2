import { IsString, IsInt } from 'class-validator';

export class UpdateAddressLinkDto {
    @IsInt()
    addressId: number;

    @IsInt()
    belongToId: number;

    @IsString()
    belongToType: string;
}