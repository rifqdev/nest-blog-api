import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  async serverStatus() {
    return { message: 'server running properly', code: 200 };
  }
}
