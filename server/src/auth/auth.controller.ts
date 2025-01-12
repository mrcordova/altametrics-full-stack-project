import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AuthEntity, UserEntity } from "./entities/auth.entity";

@Controller("auth")
@ApiTags("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiCreatedResponse({ type: AuthEntity })
  login(@Body() { email, password }: CreateAuthDto) {
    return this.authService.login(email, password);
  }
}
