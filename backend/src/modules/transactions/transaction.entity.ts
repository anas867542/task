import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  transaction_id: string;

  @Column()
  user_id: string;

  @Column('decimal')
  amount: number;

  @Column()
  device_id: string;

  @Column()
  timestamp: Date;

  @Column({ default: 'NONE' })
  risk_flag: string;

  @Column({ nullable: true })
  rule_triggered: string;

  @CreateDateColumn()
  created_at: Date;
}
