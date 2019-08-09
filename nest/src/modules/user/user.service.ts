import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { ITokenResult } from './user.interface';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { TOKEN_EXPIRED } from '@/config';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleEntity } from '../role/role.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  /**
   * 生成 jwt
   * @param {(string | number)} id
   * @param {RoleEntity[]} roles
   * @returns {ITokenResult}
   * @memberof UserService
   */
  public generateJWT(id: string | number, roles: RoleEntity[]): ITokenResult {
    const tokens = roles.map(role => role.token);
    return {
      access_token: this.jwtService.sign({ id, roles: tokens }),
      expired_in: TOKEN_EXPIRED,
    };
  }

  /**
   * 登录 验证用户信息 返回 token
   * @param {LoginUserDto} loginUserDto
   * @returns {Promise<ITokenResult>}
   * @memberof UserService
   */
  public async login(loginUserDto: LoginUserDto): Promise<ITokenResult> {
    const { username, password } = loginUserDto;
    const user = await this.findOne({ username });
    if (user && user.password === password) {
      return Promise.resolve(this.generateJWT(user.id, user.roles));
    }
    return null;
  }

  /**
   * 查找用户
   * @param {*} query 查找参数
   * @returns {Promise<UserEntity>}
   * @memberof UserService
   */
  public async findOne(query: any): Promise<UserEntity> {
    return await this.userRepository.findOne(query, { relations: ['roles'] });
  }

  /**
   * 构建除了密码之外的用户信息
   * 用户不存在(查询结果为空时) -> 400
   * @param {UserEntity} user
   * @returns
   * @memberof UserService
   */
  public buildUser(user: UserEntity) {
    if (user) {
      const { password, createdAt, updatedAt, ...result } = user;
      return result;
    } else {
      throw new HttpException({ error: '用户不存在' }, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * 创建用户
   * @param {CreateUserDto} dto
   * @returns {Promise<ITokenResult>}
   * @memberof UserService
   */
  public async create(dto: CreateUserDto): Promise<ITokenResult> {
    // 添加默认角色
    if (!dto.roles) {
      const role = await this.roleRepository.findOne({
        where: { token: 'default' },
      });
      dto.roles = [role];
    }

    const user = this.userRepository.create(dto);
    const savedUser = await this.userRepository.save(user);
    return Promise.resolve(this.generateJWT(savedUser.id, savedUser.roles));
  }

  /**
   * 更新用户信息
   * @param {UpdateUserDto} user
   * @returns {Promise<void>}
   * @memberof UserService
   */
  public async update(user: UpdateUserDto): Promise<void> {
    const { id } = user;
    let toUpdate = await this.findOne({ id });
    if (toUpdate) {
      await this.userRepository.save(Object.assign(toUpdate, user));
      return Promise.resolve();
    } else {
      return Promise.reject({ error: '用户不存在' });
    }
  }
}
