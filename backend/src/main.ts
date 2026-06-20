import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3005);
}

bootstrap().catch((err) => {
  // Ensure unhandled rejections are logged and process exits with failure
  // This satisfies lint rules requiring promise handling.
  // eslint-disable-next-line no-console
  console.error('Bootstrap error:', err);
  process.exit(1);
});
