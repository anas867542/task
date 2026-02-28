import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
} from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  transaction_id: string;

  @Column()
  @Index()
  user_id: string;

  @Column('decimal')
  amount: number;

  @Column()
  device_id: string;

  @Column()
  timestamp: Date;

  @Column({ default: 'NONE' })
  @Index()
  risk_flag: string;

  @Column({ nullable: true })
  rule_triggered: string;

  @CreateDateColumn()
  created_at: Date;
}
