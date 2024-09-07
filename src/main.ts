import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from '@/common/logger/logger.service';
import { TransformInterceptor } from '@/common/interceptor/transform.interceptor';
import { HttpExceptionFilter } from '@/common/filter/all-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { env } from './config/database';
import { SwaggerConfig } from './common/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useLogger(app.get(CustomLogger));
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  app.useStaticAssets('assets', {
    prefix: '/assets/',
  });

  SwaggerConfig.create(app);
  await app.listen(env.SERVICE_CONFIG);
}
bootstrap();
