export default {
  // 服务基本配置
  SERVICE_CONFIG: {
    // 端口
    port: 3002,
  },

  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rootWN0317',
    database: 'shop_service',
    autoLoadEntities: true,
    synchronize: true,
  },
};
