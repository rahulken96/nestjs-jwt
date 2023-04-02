import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSomething(): string{
    return `Membalikkan Data String`
  }

  getNumber(): number{
    return 1945
  }
}
