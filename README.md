### 项目技术

1. 初始化项目

2. 配置全局管道校验

```
npm i --save class-validator class-transformer
```

```
// app.module.ts
// providers
{
  provide: APP_PIPE,
  useClass: ValidationPipe,
}

```

3. log4j

```
npm i --save log4js
```

4. 数据库相关配置

```
npm i --save @nestjs/config
```

```
npm install --save @nestjs/typeorm typeorm mysql2
```

5. swagger

```
npm i @nestjs/swagger
```

6. 返回数据格式统一

7. 路径别名
