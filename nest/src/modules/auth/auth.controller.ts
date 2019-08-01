import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IAuth, ITokenResult } from './auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() body: IAuth): Promise<ITokenResult> {
    return await this.authService.login(body);
  }
}
