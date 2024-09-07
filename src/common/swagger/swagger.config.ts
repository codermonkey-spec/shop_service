import { INestApplication, Inject, Injectable } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Injectable()
export class SwaggerConfig {
  static async create(
    app: INestApplication<any> | PromiseLike<INestApplication<any>>,
  ) {
    const config = new DocumentBuilder()
      .setTitle('商品管理系统api文档')
      .setDescription('')
      .setVersion('1.0')
      .addTag('api文档')
      .build();
    const document = SwaggerModule.createDocument(await app, config);
    SwaggerModule.setup('api', await app, document);
  }
}
