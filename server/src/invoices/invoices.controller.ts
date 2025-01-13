import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { InvoicesService } from "./invoices.service";
import { ApiBearerAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { InvoiceEntity } from "./entities/invoice.entity";
import { PrismaClientExceptionFilter } from "src/prisma-client-exception/prisma-client-exception.filter";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("invoices")
@ApiTags("Invoices")
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: InvoiceEntity, isArray: true })
  findAll() {
    return this.invoicesService.findAll();
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: InvoiceEntity })
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.invoicesService.findOne(id);
  }
}
