import { Controller, Get } from '@nestjs/common';
import { GreetService } from './greet.service';

@Controller('greet')
export class GreetController {
  constructor(private readonly greetService: GreetService) {}

  @Get()
  getGreeting(): string {
    return this.greetService.getGreeting();
  }
}
