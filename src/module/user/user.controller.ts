import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { Public } from '../auth/constants';
import { AuthService } from '../auth/auth.service';
import { UserDto } from '@/common/dto/user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ description: '用户登陆' })
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() user: UserDto) {
    return this.authService.getToken(user.username, user.password);
  }
}
