import { Job } from 'src/job/job.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true})
  description: string;
  
  @Column({ default: true })
  status: boolean;

  @OneToMany(() => Job, (job) => job.parent)
  jobs: Job[];


}
