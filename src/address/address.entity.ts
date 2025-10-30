import { AddressLink } from 'src/address-link/address-link.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unitNumber: string;

  @Column()
  streetNumber: string;

  @Column()
  streetName: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  postcode: string;

  @Column()
  country: string;

  @OneToMany(() => AddressLink, (link) => link.address)
  links: AddressLink[];
}

