import { AddressLink } from 'src/address-link/address-link.entity';
import { text } from 'stream/consumers';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Caregiver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column({ nullable: true })
    dateOfBirth?: Date;

    @Column({ nullable: true })
    gender?: string;

    @Column({ nullable: true })
    profilePicture?: string;

    @Column("text", { array: true, nullable: true })
    languages?: string[];

    @Column("text", { array: true, nullable: true })
    certifications?: string[];

    @Column({ type: 'int', nullable: true })
    experienceYears?: number;

    @Column({ type: 'json', nullable: true })
    availability?: any; // Example: { monday: '9-5', tuesday: '10-4' }

    @Column({ default: false })
    policeCheck: boolean;

    @Column({ default: false })
    workingWithChildrenCheck: boolean;

    @Column({ default: false })
    verified: boolean;

    @Column({ type: 'float', default: 0 })
    rating: number;

    @Column({ type: 'int', default: 0 })
    reviewCount: number;

    @Column()
    status: boolean;

    @Column()
    bio: string;
}
