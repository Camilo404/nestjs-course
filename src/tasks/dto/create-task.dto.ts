import { IsBoolean, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @MinLength(3)
    name: string;

    @IsBoolean()
    status: boolean;
}