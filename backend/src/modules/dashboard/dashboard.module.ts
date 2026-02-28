import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { TransactionModule } from '../transactions/transaction.module';

@Module({
  imports: [TransactionModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
