import { Controller, Dependencies, Get,Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get("/contoh2")
  getHello() {
    return this.appService.getHello();
  }

  @Post('/contoh')
  getzzzz() {
    return this.appService.getExample();
  }
}
