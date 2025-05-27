import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Roe', email: 'jane@example.com' },
  ];

  getUser({ id }: { id: string }) {
    return this.users.find(user => user.id === id);
  }
}
