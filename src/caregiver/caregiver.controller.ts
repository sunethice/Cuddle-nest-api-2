import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { createCaregiverDto } from './dto/create-caregiver.dto';
import { CaregiverService } from './caregiver.service';

@Controller('caregiver')
export class CaregiverController {
    constructor(private readonly caregiverService: CaregiverService){ }

    @Post()
    createCaregiver(@Body() caregiverInfo: createCaregiverDto){
        return this.caregiverService.createCaregiver(caregiverInfo);
    }

    @Patch('/phone/:id')
    updatePhoneNumber(@Param('id') id, @Body('phoneNumber') phoneNumber: string) {
        return this.caregiverService.updatePhoneNumber(id, phoneNumber);
    }

    @Patch('/bio/:id')
    updateBio(@Param('id') id, @Body('description') description: string) {
        return this.caregiverService.updateBio(id, description);
    }

    @Patch('/languages/:id')
    updateLanuages(@Param('id') id, @Body('languages') languages: string[]) {
        return this.caregiverService.updateLanuages(languages);
    }

    @Get('/list')
    retrieveCaregivers() {
        return this.caregiverService.listCaregivers();
    }

    @Get(':id')
    retrieveCaregiversById(@Param('id') id: number) {
        return this.caregiverService.getCaregiverById(id);
    }
}
