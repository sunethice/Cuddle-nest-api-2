import { Injectable } from '@nestjs/common';
import { createParentDto } from './dto/create-parent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Parent } from './parent.entity';
import { Repository } from 'typeorm';
import { Address } from 'src/address/address.entity';
import { AddressLink } from 'src/address-link/address-link.entity';

@Injectable()
export class ParentService {
    constructor(
        @InjectRepository(Parent)
        private readonly parentRepo: Repository<Parent>,
        @InjectRepository(Address)
        private readonly addressRepo: Repository<Address>,
        @InjectRepository(AddressLink)
        private readonly addressLinkRepo: Repository<AddressLink>
    ) { }

    async createParent(parentInfo: createParentDto) {
        // Create Parent
        const parent = this.parentRepo.create(parentInfo);
        await this.parentRepo.save(parent);

        // Create Address
        const address = this.addressRepo.create({
            unitNumber: parentInfo.address!.unitNumber,
            streetNumber: parentInfo.address!.streetNumber,
            streetName: parentInfo.address!.streetName,
            city: parentInfo.address!.city,
            state: parentInfo.address!.state,
            postcode: parentInfo.address!.postcode,
            country: parentInfo.address!.country,
        });
        await this.addressRepo.save(address);

        // Create AddressLink
        const link = this.addressLinkRepo.create({
            address: address,
            addressId: address.id,
            belongToType: 'PARENT',
            belongToId: parent.id,
        });
        await this.addressLinkRepo.save(link);

        return { parent, address };
    }

    async updatePhoneNumber(id: number, phoneNumber: string) {
        const parent = await this.parentRepo.findOneBy({ id });
        if (!parent) throw new Error('Parent not found');

        parent.phoneNumber = phoneNumber;
        return this.parentRepo.save(parent);
    }

    async updateDescription(id: number, description: string) {
        const parent = await this.parentRepo.findOneBy({ id });
        if (!parent) throw new Error("Parent not found");

        parent.description = description;
        return this.parentRepo.save(parent)
    }

    updateLanuages(languages: string[]) {

        return [];
    }

    async listParents() {
        const parents = await this.parentRepo.find({
            where: { status: true },
        });
        return parents;
    }

    async getParentById(id: number) {
        const parent = await this.parentRepo.findOneBy({ id });
        if (!parent) throw new Error("Parent not found");
        return parent;
    }

    async ListAllParents() {
        return this.parentRepo.find();
    }
}
