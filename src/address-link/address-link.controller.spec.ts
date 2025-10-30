import { Test, TestingModule } from '@nestjs/testing';
import { AddressLinkController } from './address-link.controller';

describe('AddressLinkController', () => {
  let controller: AddressLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressLinkController],
    }).compile();

    controller = module.get<AddressLinkController>(AddressLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
