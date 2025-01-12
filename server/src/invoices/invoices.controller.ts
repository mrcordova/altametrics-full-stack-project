import { Controller, Get, Param, Query, ParseIntPipe } from "@nestjs/common";
import { InvoicesService } from "./invoices.service";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { InvoiceEntity } from "./entities/invoice.entity";

@Controller("invoices")
@ApiTags("Invoices")
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  @ApiOkResponse({ type: InvoiceEntity, isArray: true })
  findAll(@Query("user_id", ParseIntPipe) user_id: number) {
    return this.invoicesService.findAll(user_id);
  }

  @Get(":id")
  @ApiOkResponse({ type: InvoiceEntity })
  findOne(
    @Query("user_id", ParseIntPipe) user_id: number,
    @Param("id", ParseIntPipe) id: number
  ) {
    return this.invoicesService.findOne(user_id, id);
  }
}
