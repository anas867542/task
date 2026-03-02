import {
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
  IsNotEmpty,
  Min,
} from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  transaction_id: string;

  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsString()
  @IsNotEmpty()
  device_id: string;

  @IsDateString()
  timestamp: Date;

  @IsOptional()
  @IsString()
  risk_flag?: string;

  @IsOptional()
  @IsString()
  rule_triggered?: string;
}
