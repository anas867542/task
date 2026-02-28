export class CreateTransactionDto {
  transaction_id: string;
  user_id: string;
  amount: number;
  device_id: string;
  timestamp: Date;
  risk_flag?: string;
  rule_triggered?: string;
}
