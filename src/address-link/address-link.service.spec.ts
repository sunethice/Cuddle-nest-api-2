import { Test, TestingModule } from '@nestjs/testing';
import { AddressLinkService } from './address-link.service';

describe('AddressLinkService', () => {
  let service: AddressLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressLinkService],
    }).compile();

    service = module.get<AddressLinkService>(AddressLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
