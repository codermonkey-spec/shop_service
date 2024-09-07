import {
  Controller,
  HttpStatus,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from '../auth/constants';
import { uploadConfig } from './uploadConfig';
import { UploadService } from './upload.service';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileUploadDto } from '@/common/dto/fileUpload.dto';

@ApiTags('文件上传')
@Controller()
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @ApiBody({
    description: 'jpeg图片',
    type: FileUploadDto,
  })
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ description: '目前只支持jpeg单张图片' })
  @Public()
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', uploadConfig))
  uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'jpeg' })
        .addMaxSizeValidator({ maxSize: 100000 })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
  ) {
    return this.uploadService.create(file);
  }
}
