import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // отключение cors
  app.enableCors({
    origin: '*'
  });

  await app.listen(3001);
}

bootstrap();
