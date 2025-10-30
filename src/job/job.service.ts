import { Injectable } from '@nestjs/common';

@Injectable()
export class JobService {

    createPost(){

        return [];
    }

    updateStatus(status: boolean){

        return 0;
    }

    updateAssignee(assignee: string){

        return "";
    }

    deleteJob(id: string){

        return id;
    }

    updateCharge(charge: number){
        return charge;
    }

    updateLocation(location: string){
        return location;
    }

    isMonitoringRequired(isRequired: boolean){
        return isRequired;
    }

    isSchoolPickup(isPickup: boolean){
        return isPickup;
    }

    updateDatetime(datetime: string){
        return datetime;
    }
}
