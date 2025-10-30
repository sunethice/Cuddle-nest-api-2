import { Parent } from "src/parent/parent.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: "int", array: true })
  childId: number[];

  @Column({ default: false })
  isSchoolPick: boolean;

  @Column({ default: false })
  isSpecialNeed: boolean;

  @Column({ default: false })
  isNewBornSupport: boolean;

  @Column({ default: false })
  isPremium: boolean; // ✅ NEW — consolidated flag

  @Column()
  jobDate: string;

  @Column()
  jobLocation: string;

  @Column()
  jobNote: string;

  @Column({ type: "enum", enum: ["HOURLY", "FIXED"] })
  payType: "HOURLY" | "FIXED";

  @Column()
  payRate: number;

  @ManyToOne(() => Parent, (parent) => parent.jobs)
  @JoinColumn({ name: "parent_id" })
  parent: Parent;

  @Column()
  parentId: number;
}
