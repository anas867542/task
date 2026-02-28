import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  @Post()
  create(@Body() dto: CreateTransactionDto) {
    return this.transactionService.createTransaction(dto);
  }
}
