import { HttpStatus, Module, Scope } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";

import { InvoicesModule } from "./invoices/invoices.module";
import { AuthModule } from "./auth/auth.module";
import { PrismaClientExceptionFilter } from "./prisma-client-exception/prisma-client-exception.filter";
import { APP_FILTER } from "@nestjs/core";

@Module({
  imports: [
    PrismaModule,
    InvoicesModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: PrismaClientExceptionFilter,
      scope: Scope.REQUEST,
    },
  ],
})
export class AppModule {}
