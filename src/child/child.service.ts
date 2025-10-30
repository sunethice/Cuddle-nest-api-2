import { Injectable } from '@nestjs/common';
import { addChild } from './dto/add-child.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Child } from './child.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChildService {
    constructor(@InjectRepository(Child) private readonly childRepo: Repository<Child>){}

    async addChild(childInfo: addChild) {
        const child = await this.childRepo.create(childInfo)
        return this.childRepo.save(child);
    }

    async updateAllergies(id: number, allergies: string[]) {
        const child = await this.childRepo.findOneBy({id});
        if(!child) throw new Error("Child not found");

        child.allergies = allergies;
        this.childRepo.save(child);
        return [];
    }
}
