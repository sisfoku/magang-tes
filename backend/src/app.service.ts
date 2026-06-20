import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Aplikasi Is Running! Code Next is working!';
  }
}
