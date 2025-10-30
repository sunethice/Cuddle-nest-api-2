import { Module } from '@nestjs/common';
import { ParentController } from './parent.controller';
import { ParentService } from './parent.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from './parent.entity';
import { Address } from 'src/address/address.entity';
import { AddressLink } from 'src/address-link/address-link.entity';
import { Job } from 'src/job/job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parent, Address, AddressLink, Job])],
  controllers: [ParentController],
  providers: [ParentService]
})
export class ParentModule { }
