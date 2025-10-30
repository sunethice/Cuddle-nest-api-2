import { Address } from 'src/address/address.entity';
import { Caregiver } from 'src/caregiver/caregiver.entity';
import { Parent } from 'src/parent/parent.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class AddressLink {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Address, (address) => address.links)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column()
  addressId: number;

  @Column()
  belongToId: number; // parentId or caregiverId

  @Column()
  belongToType: 'PARENT' | 'CAREGIVER';

}