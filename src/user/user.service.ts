import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async createUser(): Promise<any> {
    return 'Create User';
  }
}
