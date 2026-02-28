import { Injectable } from '@nestjs/common';
import { TransactionRepository } from '../transactions/transaction.repository';

@Injectable()
export class DashboardService {
  constructor(private readonly transactionRepo: TransactionRepository) {}

  async getDashboard() {
    const total = await this.transactionRepo.count();

    const flagged = await this.transactionRepo.count({
      where: [
        { risk_flag: 'HIGH_RISK' },
        { risk_flag: 'SUSPICIOUS' },
      ],
    });

    const highRisk = await this.transactionRepo.count({
      where: { risk_flag: 'HIGH_RISK' },
    });

    const suspicious = await this.transactionRepo.count({
      where: { risk_flag: 'SUSPICIOUS' },
    });

    return {
      total_transactions: total,
      flagged_transactions: flagged,
      high_risk: highRisk,
      suspicious: suspicious,
    };
  }
}
