import { Test, TestingModule } from '@nestjs/testing';
import { NamesResolver } from './names.resolver';

describe('NamesResolver', () => {
  let resolver: NamesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NamesResolver],
    }).compile();

    resolver = module.get<NamesResolver>(NamesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
