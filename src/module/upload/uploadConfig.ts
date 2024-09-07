import { diskStorage } from 'multer';

export const uploadConfig = {
  // 新增代码
  storage: diskStorage({
    destination: 'assets/', // 设置文件保存位置为根目录下的 uploads 文件夹
    filename: (_req, file, cb) => {
      // 生成一个随机字符串
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      // 设置文件名
      return cb(null, `${randomName}${file.originalname}`);
    },
  }),
};
