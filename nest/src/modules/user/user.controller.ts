import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ITokenResult } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private async getUserById(id: number) {
    const user = await this.userService.findOne({ id });
    return this.userService.buildUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('self')
  async getProfile(@Request() req) {
    const { id } = req.user;
    return this.getUserById(id);
  }

  @Get(':id')
  getByID(@Param('id') id: number) {
    return this.getUserById(id);
  }

  @Post()
  async create(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Post('login')
  async login(@Body() body: LoginUserDto): Promise<ITokenResult> {
    return await this.userService.login(body);
  }
}
