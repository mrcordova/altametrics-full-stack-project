import { ApiProperty } from "@nestjs/swagger";
import { isStrongPassword, IsEmail, IsStrongPassword } from "class-validator";
export class CreateAuthDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsStrongPassword()
  @ApiProperty()
  password: string;
}
