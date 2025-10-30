import { IsArray, IsBoolean, IsDate, IsDateString, IsInt, IsNumber, IsString } from "class-validator";

export class JobDto{
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsArray()
    @IsInt({ each: true })
    childId: number[];

    @IsBoolean()
    isSchoolPick: boolean;

    @IsBoolean()
    isSpecialNeed: boolean;

    @IsBoolean()
    isNewBornSupport: boolean;

    @IsDateString()
    jobDate: string;

    @IsString()
    jobLocation: string;

    @IsString()
    jobNote: string;

    @IsString()
    payType: "HOURLY" | "FIXED";

    @IsNumber()
    payRate: number;

    @IsInt()
    parentId: number;
}