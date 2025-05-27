import { Controller, Get } from '@nestjs/common';
import { TimeService } from './time.service';

@Controller('time')
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @Get()
  getTime(): string {
    return this.timeService.getTime();
  }
}
