import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'dinocloud',
        password: '$2b$10$4xZ8Fn4Tl8dUCPUVam8nSeWWoRFRG7bACrz7n0hJUskj6.VPC.D8K', //dino123
      },
      {
        userId: 2,
        username: 'urbano',
        password: '$2b$10$RNNZmGkpLNWIlFybNKt9aORo16hC2nupPdaiobE6lIzhHuw4D4fMW', //urb123
      },
      {
        userId: 3,
        username: 'admin',
        password: '$2b$10$7.p44nlK2cZ9InSDAx5uQ.153Xve6/0KZyt1ecWgHhgiFeTED848O', //test123
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
