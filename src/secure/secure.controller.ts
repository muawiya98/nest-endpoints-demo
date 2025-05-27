import { Controller, Get } from '@nestjs/common';

@Controller('secure')
export class SecureController {
  @Get()
  getSecureData(): string {
    return 'This is protected data.';
  }
}
