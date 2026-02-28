import { BadRequestException, Injectable } from '@nestjs/common';
import { TransactionRepository } from './transaction.repository';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  constructor(private readonly transactionRepo: TransactionRepository) {}

  async createTransaction(dto: CreateTransactionDto): Promise<Transaction> {
    const existing = await this.transactionRepo.findOne({
      where: { transaction_id: dto.transaction_id },
    });

    if (existing) {
      throw new BadRequestException('Duplicate transaction');
    }

    let riskFlag = 'NONE';
    let ruleTriggered: string | undefined = undefined;

    if (dto.amount > 20000) {
      riskFlag = 'HIGH_RISK';
      ruleTriggered = 'RULE_1';
    }

    const count = await this.transactionRepo.count({
      where: { user_id: dto.user_id },
    });

    if (count >= 3) {
      riskFlag = 'SUSPICIOUS';
      ruleTriggered = 'RULE_2';
    }

    const transaction = this.transactionRepo.create({
      ...dto,
      risk_flag: riskFlag,
      rule_triggered: ruleTriggered,
    });

    return await this.transactionRepo.save(transaction);
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionRepo.findAll();
  }
}
