import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsString, Length, min } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: '用户名' })
  @IsString()
  @Length(5, 20)
  username: string;

  @ApiProperty({ description: '密码' })
  @IsString()
  @Length(5, 20)
  password: string;
}
