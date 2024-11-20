import { Test, TestingModule } from '@nestjs/testing';
import { PromptGateway } from './prompt.gateway';

describe('PromptGateway', () => {
  let gateway: PromptGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromptGateway],
    }).compile();

    gateway = module.get<PromptGateway>(PromptGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
