import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  async getUser(@Query('id') id: string): Promise<User> {
    return this.userService.getUser(id);
  }
}
