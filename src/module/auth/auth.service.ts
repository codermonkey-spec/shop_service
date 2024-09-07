import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async getToken(
    username: string,
    password: string,
  ): Promise<{ token: string }> {
    const user = this.userService.findOne(username);
    if ((await user).password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { id: (await user).id, username: (await user).username };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
