import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/string')
  getSomething(): string{
    return this.appService.getSomething();
  }

  @Get('/num')
  getNumber(): number{
    return this.appService.getNumber();
  }
}
