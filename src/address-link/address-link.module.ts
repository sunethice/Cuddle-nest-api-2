import { Module } from '@nestjs/common';
import { AddressLinkController } from './address-link.controller';
import { AddressLinkService } from './address-link.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressLink } from './address-link.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AddressLink])],
    controllers: [AddressLinkController],
    providers: [AddressLinkService]
})
export class AddressLinkModule {}
