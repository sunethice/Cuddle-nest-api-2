import { IsDateString, IsInt, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class addReview{

    @IsOptional()
    @IsString()
    comment: string;

    @IsInt()
    @Min(1)
    @Max(5)
    numberOfStars: number;

    @IsDateString()
    reviewedOn : string;

    @IsString()
    parentId: string;

    @IsString()
    carerId: string;
}