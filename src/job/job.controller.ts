import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
    constructor(private readonly jobService: JobService){}

    @Post()
    createPost(){
        return this.jobService.createPost();
    }

    @Patch('/status')
    updateStatus(@Body('status') status: boolean){
        return this.jobService.updateStatus(status);
    }

    @Patch('/assignee')
    updateAssignee(@Body('assignee') assignee: string){
        return this.jobService.updateAssignee(assignee);
    }

    @Delete(':id')
    deleteJob(@Param() id: string){
        return this.jobService.deleteJob(id);
    }

    @Patch('/charge')
    updateCharge(@Body('charge') charge: number){
        return this.jobService.updateCharge(charge);
    }

    @Patch('/location')
    updateLocation(@Body('location') location: string){
        return this.jobService.updateLocation(location);
    }

    @Patch('/monitor')
    isMonitoringRequired(@Body('monitoring') isRequired: boolean){
        return this.jobService.isMonitoringRequired(isRequired);
    }

    @Patch('/pickup')
    isSchoolPickup(@Body('pickup') isPickup: boolean){
        return this.jobService.isSchoolPickup(isPickup);
    }

    @Patch('/datetime')
    updateDatetime(@Body('datetime') datetime: string) {
        return this.jobService.updateDatetime(datetime);
    }
}