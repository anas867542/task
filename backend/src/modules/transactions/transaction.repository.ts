import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionRepository {
  constructor(
    @InjectRepository(Transaction)
    private readonly repository: Repository<Transaction>,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return this.repository.find({
      order: { created_at: 'DESC' },
    });
  }

  async findOne(options: {
    where: { transaction_id?: string };
  }): Promise<Transaction | null> {
    return this.repository.findOne(options);
  }

  async count(options?: FindManyOptions<Transaction>): Promise<number> {
    return this.repository.count(options);
  }

  create(partial: Partial<Transaction>): Transaction {
    return this.repository.create(partial);
  }

  async save(transaction: Transaction): Promise<Transaction> {
    return this.repository.save(transaction);
  }
}
