import { JwtService } from '@nestjs/jwt';
import { ITokenResult, IAuth } from './auth.interface';
import { Injectable } from '@nestjs/common';
import config from 'src/config';

const USER_INFO = {
  username: 'test',
  password: '123456',
};

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  public login({ password, username }: IAuth): Promise<ITokenResult> {
    if (password === USER_INFO.password && username === USER_INFO.username) {
      return Promise.resolve(this.createToken(username));
    }
  }

  private createToken(username: string): ITokenResult {
    return {
      token: this.jwtService.sign(
        { username },
        { keyid: config.JWT_SECRET, expiresIn: config.TOKEN_EXPIRED },
      ),
      expired: config.TOKEN_EXPIRED,
    };
  }
}
