import { Test, TestingModule } from '@nestjs/testing';
import { BloodResolver } from './blood.resolver';

describe('BloodResolver', () => {
  let resolver: BloodResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodResolver],
    }).compile();

    resolver = module.get<BloodResolver>(BloodResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
