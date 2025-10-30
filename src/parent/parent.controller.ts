import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ParentService } from './parent.service';
import { createParentDto } from './dto/create-parent.dto';

@Controller('parent')
export class ParentController {
    constructor(private readonly parentService: ParentService) { }

    @Post()
    createParent(@Body() parentInfo: createParentDto) {
        return this.parentService.createParent(parentInfo);
    }

    @Patch('/phone/:id')
    updatePhoneNumber(@Param('id') id, @Body('phoneNumber') phoneNumber: string) {
        return this.parentService.updatePhoneNumber(id, phoneNumber);
    }

    @Patch('/description/:id')
    updateDescription(@Param('id') id, @Body('description') description: string) {
        return this.parentService.updateDescription(id, description);
    }

    @Patch('/languages/:id')
    updateLanuages(@Param('id') id, @Body('languages') languages: string[]) {
        return this.parentService.updateLanuages(languages);
    }

    @Get('/list')
    retrieveParents() {
        return this.parentService.listParents();
    }

    @Get(':id')
    retrieveParentById(@Param('id') id: number) {
        return this.parentService.getParentById(id);
    }

}
