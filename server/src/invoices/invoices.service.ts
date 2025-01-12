import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}
  findAll(user_id: number) {
    return this.prisma.invoice.findMany({ where: { user_id } });
  }

  findOne(id: number) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }
}
