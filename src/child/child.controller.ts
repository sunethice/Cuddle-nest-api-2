import { Controller, Param, Patch, Post } from '@nestjs/common';
import { ChildService } from './child.service';
import { addChild } from './dto/add-child.dto';

@Controller('child')
export class ChildController {
    constructor(private readonly childService: ChildService){}

    @Post()
    addChild(childInfo : addChild){
        return this.childService.addChild(childInfo);
    }

    @Patch('/allergies/:id')
    updateAllergies(@Param('id') id: number, allergies: string[]){
        return this.childService.updateAllergies(id, allergies);
    }
}
