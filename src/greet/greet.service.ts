import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetService {
  getGreeting(): string {
    return 'Hello from NestJS!';
  }
}
