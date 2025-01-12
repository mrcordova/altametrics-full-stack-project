import { Injectable } from "@nestjs/common";

@Injectable()
export class InvoicesService {
  findAll() {
    return `This action returns all invoices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }
}
