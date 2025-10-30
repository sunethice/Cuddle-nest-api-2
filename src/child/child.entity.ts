import { Parent } from 'src/parent/parent.entity';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class Child{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: Date, nullable: false})
    date_of_birth: Date;

    @Column('text')
    gender : string;

    @Column({ type: 'json', nullable: true })
    allergies: Record<string, any>;

    @ManyToOne(() => Parent, (parent) => parent.jobs) 
    @JoinColumn({ name: 'parent_id' })
    parent: Parent;
    
    @Column()
    parentId: number;
}