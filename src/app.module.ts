import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_PIPE } from '@nestjs/core';
import { LoggerModule } from './common/logger/logger.module';
import { env } from './config/database';
import { UploadModule } from './module/upload/upload.module';
import UserModule from './module/user/user.module';

@Module({
  imports: [
    LoggerModule,
    TypeOrmModule.forRoot(env.DATABASE_CONFIG),
    UserModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AppService,
  ],
})
export class AppModule {}
