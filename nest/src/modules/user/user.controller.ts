import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ITokenResult } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return [];
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getProfile(@Request() req) {
    const { id } = req.user;
    return this.userService.getUserById(id);
  }

  @Get(':id')
  getByID(@Param('id') id: string) {
    return `get id: ${id}`;
  }

  @Post()
  async create(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Post('login')
  async login(@Body() body: LoginUserDto): Promise<ITokenResult> {
    return await this.userService.validateUser(body);
  }
}
