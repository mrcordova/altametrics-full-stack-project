import { Invoice } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
export class InvoiceEntity implements Invoice {
  @ApiProperty()
  amount: number;
  @ApiProperty()
  user_id: number;
  @ApiProperty()
  id: number;
  @ApiProperty()
  vendor_name: string;
  @ApiProperty()
  due_date: Date;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  description: string;
  @ApiProperty()
  paid: boolean;
}
