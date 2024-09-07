import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class UploadService {
  create(file: Express.Multer.File) {
    if (!file) {
      throw new HttpException(
        'Only image files are allowed',
        HttpStatus.FORBIDDEN,
      );
    }

    return {
      url: `/assets/${file.filename}`,
    };
  }
}
