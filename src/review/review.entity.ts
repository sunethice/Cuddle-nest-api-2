import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // tells TypeORM this class maps to a DB table
export class Review {
    @PrimaryGeneratedColumn() // auto-increment primary key
    review_id: number;

    @Column()
    parent_id: string;

    @Column() // unique column
    carer_id: string;

    @Column()
    comment: string;

    @Column()
    rating: string;
}