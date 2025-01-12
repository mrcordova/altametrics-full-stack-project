import { ApiProperty } from "@nestjs/swagger";
import {
  isStrongPassword,
  IsEmail,
  IsStrongPassword,
  IsNotEmpty,
  IsString,
  MinLength,
} from "class-validator";
export class CreateAuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
