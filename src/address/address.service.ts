import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { Repository } from 'typeorm';
import { AddressDto } from './dto/address.dto';

@Injectable()
export class AddressService {
    constructor(@InjectRepository(Address) private readonly addressRepo : Repository<Address>){

    }

    async createAddress(addressInfo : AddressDto) {
        const address = this.addressRepo.create(addressInfo);
        const saved = await this.addressRepo.save(address);
        return saved;
    }

    async updateAddress(id: number, addressInfo : AddressDto) {

        const address = await this.addressRepo.findOneBy({ id });
        if (!address) throw new Error('Address not found');

        Object.assign(address, addressInfo);
        return await this.addressRepo.save(address);
    }
}
