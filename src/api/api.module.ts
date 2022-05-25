import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CashModule } from './cash/cash.module';

@Module({
  imports: [UserModule, CashModule],
})
export class ApiModule {}
