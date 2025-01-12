import { Controller, Get, Param, Query } from "@nestjs/common";
import { InvoicesService } from "./invoices.service";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { InvoiceEntity } from "./entities/invoice.entity";

@Controller("invoices")
@ApiTags("Invoices")
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  @ApiOkResponse({ type: InvoiceEntity, isArray: true })
  findAll(@Query("user_id") user_id: string) {
    return this.invoicesService.findAll(parseInt(user_id));
  }

  @Get(":id")
  @ApiOkResponse({ type: InvoiceEntity })
  findOne(@Query("user_id") user_id: string, @Param("id") id: string) {
    return this.invoicesService.findOne(parseInt(user_id), parseInt(id));
  }
}
