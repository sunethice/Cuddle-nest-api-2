import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressLink } from './address-link.entity';
import { UpdateAddressLinkDto } from './dto/update-address-link.dto';

@Injectable()
export class AddressLinkService {
    constructor(@InjectRepository(AddressLink) private readonly addressLinkRepo : Repository<AddressLink>){}

    async createAddressLink(addressLinkInfo : UpdateAddressLinkDto){
        const addressLink = await this.addressLinkRepo.create(addressLinkInfo as unknown as Partial<AddressLink>);
        const saved = this.addressLinkRepo.save(addressLink);
        return saved;
    }

    
}
