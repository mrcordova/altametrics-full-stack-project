import { Injectable } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login(createAuthDto: CreateAuthDto) {
    return this.prisma.user.create({ data: createAuthDto });
  }
}
