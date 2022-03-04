import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import fmp from 'fastify-multipart';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.register(fmp);
  await app.listen(parseInt(process.env.PORT) || 3000, '0.0.0.0');
}
bootstrap();
