import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from '../dto/create-role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.roleService.findOne({ id });
  }

  @Post()
  async create(@Body() role: CreateRoleDto) {
    return this.roleService.create(role);
  }
}
