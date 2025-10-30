import { Module } from '@nestjs/common';
import { CaregiverController } from './caregiver.controller';
import { CaregiverService } from './caregiver.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Caregiver } from './caregiver.entity';
import { Address } from 'src/address/address.entity';
import { AddressLink } from 'src/address-link/address-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Caregiver, Address, AddressLink])],
  controllers: [CaregiverController],
  providers: [CaregiverService]
})
export class CaregiverModule { }
