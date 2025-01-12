import { Controller, Get, Param, Query } from "@nestjs/common";
import { InvoicesService } from "./invoices.service";

@Controller("invoices")
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  findAll(@Query("user_id") user_id: string) {
    return this.invoicesService.findAll(parseInt(user_id));
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.invoicesService.findOne(+id);
  }
}
