import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return [];
  }

  @Get(':id')
  getByID(@Param('id') id: string) {
    return `your id: ${id}`;
  }

  @Post()
  async create(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Post('login')
  async login(@Body() body: LoginUserDto): Promise<any> {
    return await this.userService.findOne(body);
  }
}
