import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'chris',
      password: 'secret',
    },
    {
      userId: 3,
      username: 'maria',
      password: 'guess',
    },
  ];
}
