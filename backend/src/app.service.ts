import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Aplikasi Is Running! Code Next, TypeScript 6.0.3, NodeNext, ES2023';
  }
}
