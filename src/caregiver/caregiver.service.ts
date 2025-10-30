import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Caregiver } from './caregiver.entity';
import { Repository } from 'typeorm';
import { createCaregiverDto } from './dto/create-caregiver.dto';
import { Address } from 'src/address/address.entity';
import { AddressLink } from 'src/address-link/address-link.entity';

@Injectable()
export class CaregiverService {
    constructor(
        @InjectRepository(Caregiver)
        private readonly caregiverRepo: Repository<Caregiver>,
        @InjectRepository(Address)
        private readonly addressRepo: Repository<Address>,
        @InjectRepository(AddressLink)
        private readonly addressLinkRepo: Repository<AddressLink>) {

    }

    async createCaregiver(caregiverInfo: createCaregiverDto) {
        //create caregiver
        const caregiver = this.caregiverRepo.create(caregiverInfo);
        await this.caregiverRepo.save(caregiver);

        //create address
        const address = this.addressRepo.create({
            unitNumber: caregiverInfo.address!.unitNumber,
            streetNumber: caregiverInfo.address!.streetNumber,
            streetName: caregiverInfo.address!.streetName,
            city: caregiverInfo.address!.city,
            state: caregiverInfo.address!.state,
            postcode: caregiverInfo.address!.postcode,
            country: caregiverInfo.address!.country,
        });

        await this.addressRepo.save(address);

        //create address-link
        const addressLink = this.addressLinkRepo.create({
            address: address,
            addressId: address.id,
            belongToId: caregiver.id,
            belongToType: 'CAREGIVER'
        });
        await this.addressLinkRepo.save(addressLink);

        return { caregiver, address }
    }


    async updatePhoneNumber(id: number, phoneNumber: string) {
        const parent = await this.caregiverRepo.findOneBy({ id });
        if (!parent) throw new Error('Parent not found');

        parent.phoneNumber = phoneNumber;
        return this.caregiverRepo.save(parent);
    }

    async updateBio(id: number, description: string) {
        const parent = await this.caregiverRepo.findOneBy({ id });
        if (!parent) throw new Error("Parent not found");

        parent.bio = description;
        return this.caregiverRepo.save(parent)
    }

    updateLanuages(languages: string[]) {

        return [];
    }

    async listCaregivers() {
        const parents = await this.caregiverRepo.find({
            where: { status: true },
        });
        return parents;
    }

    async getCaregiverById(id: number) {
        const parent = await this.caregiverRepo.findOneBy({ id });
        if (!parent) throw new Error("Parent not found");
        return parent;
    }

    async ListAllCaregivers() {
        return this.caregiverRepo.find();
    }

}
