import { Module } from '@nestjs/common';
import { PromptController } from './prompt.controller';
import { PromptService } from './prompt.service';
import { PromptGateway } from './prompt.gateway';

@Module({
  controllers: [PromptController],
  providers: [PromptService, PromptGateway]
})
export class PromptModule {}
