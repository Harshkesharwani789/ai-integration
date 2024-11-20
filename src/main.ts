import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PromptGateway } from './prompt/prompt.gateway';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up the WebSocket gateway
  const promptGateway = app.get(PromptGateway);

  // Example log to show the gateway is set up
  console.log('PromptGateway initialized');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
