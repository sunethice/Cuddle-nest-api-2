import { Body, Controller, Patch, Post } from '@nestjs/common';
import { AddressLinkService } from './address-link.service';
import { UpdateAddressLinkDto } from './dto/update-address-link.dto';

@Controller('address-link')
export class AddressLinkController {
    constructor(private readonly addressLinkService: AddressLinkService){ }

    @Post('/addressLink')
    createAddressLink(@Body() addressLinkInfo: UpdateAddressLinkDto) {
        return this.addressLinkService.createAddressLink(addressLinkInfo); 
    }
}
