import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { ITokenResult } from './user.interface';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { TOKEN_EXPIRED } from '@/config';
import { validate } from 'class-validator';
import { throwIfValidationError } from '@/utils';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  /**
   * 生成 jwt
   * @param {number} id user.id
   * @returns {ITokenResult}
   * @memberof UserService
   */
  public generateJWT(id: number): ITokenResult {
    return {
      access_token: this.jwtService.sign({ id }),
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
      return Promise.resolve(this.generateJWT(user.id));
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
    return await this.userRepository.findOne(query);
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
      const { password, ...result } = user;
      return result;
    } else {
      throw new HttpException({ error: '用户不存在' }, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * 创建用户
   * @param {CreateUserDto} createUserDto
   * @returns {Promise<ITokenResult>}
   * @memberof UserService
   */
  public async create(createUserDto: CreateUserDto): Promise<ITokenResult> {
    // check uniqueness of username
    const { username, password } = createUserDto;
    const repo = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.username = :username', { username });

    const user = await repo.getOne();
    if (user) {
      throw new HttpException(`用户名已存在`, HttpStatus.BAD_REQUEST);
    }

    // create new user
    let newUser = new UserEntity();
    newUser.username = username;
    newUser.password = password;

    const errors = await validate(newUser);
    throwIfValidationError(errors);

    const savedUser = await this.userRepository.save(newUser);
    return Promise.resolve(this.generateJWT(savedUser.id));
  }
}
