import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDto } from './dto/address.dto';

@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService){ }

    @Post()
    createAddress( @Body() addressInfo: AddressDto) {
        return this.addressService.createAddress(addressInfo); 
    }

    @Patch('/address/:id')
    updateAddress(@Param('id') id: number, @Body() addressInfo: AddressDto) {
        return this.addressService.updateAddress(id, addressInfo); 
    }
}
