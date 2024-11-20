import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'prompt' })
export class PromptGateway implements OnGatewayConnection, OnGatewayDisconnect {
  handleConnection(client: any) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected:', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log('Message received from client:', client.id, 'Payload:', payload);
    return 'Hello world!';
  }
}
