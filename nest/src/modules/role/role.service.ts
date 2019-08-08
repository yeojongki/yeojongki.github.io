import { Injectable } from '@nestjs/common';
import { RoleEntity } from './role.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto } from '../dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRespository: Repository<RoleEntity>,
  ) {}

  public async findOne(query: any): Promise<RoleEntity> {
    return await this.roleRespository.findOne(query);
  }

  public async create(dto: CreateRoleDto) {
    return await this.roleRespository.save(dto);
  }
}
