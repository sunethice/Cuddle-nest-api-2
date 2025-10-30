import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
} from "typeorm";
import { IsNumber, Min } from "class-validator";
import { Job } from "src/job/job.entity";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  // The job this payment belongs to
  @ManyToOne(() => Job, (job) => job.id, { nullable: false })
  @JoinColumn({ name: "job_id" })
  job: Job;

  @Column()
  jobId: number;

  // Base price posted by the parent
  @Column("decimal", { precision: 10, scale: 2 })
  @IsNumber()
  @Min(0)
  taskPrice: number;

  // Platform commission percentage (e.g., 10 for 10%)
  @Column("decimal", { precision: 5, scale: 2, default: 0 })
  @IsNumber()
  @Min(0)
  serviceFeePercentage: number;

  // Platform fee in currency amount
  @Column("decimal", { precision: 10, scale: 2, default: 0 })
  @IsNumber()
  @Min(0)
  serviceFeeAmount: number;

  // Flat rate for nanny for premium tasks
  @Column("decimal", { precision: 10, scale: 2, default: 0 })
  @IsNumber()
  @Min(0)
  nannyFlatRate: number;

  // Flat rate for app for premium tasks
  @Column("decimal", { precision: 10, scale: 2, default: 0 })
  @IsNumber()
  @Min(0)
  appFlatRate: number;

  // Total amount charged to the parent
  @Column("decimal", { precision: 10, scale: 2 })
  @IsNumber()
  @Min(0)
  totalAmount: number;

  // Soft delete column
  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
