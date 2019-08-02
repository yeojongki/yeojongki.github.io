import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { IUser } from './user.interface';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET, TOKEN_EXPIRED } from '@/config';
import { validate } from 'class-validator';
import { now } from '@/utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async findOne(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return await this.userRepository.findOne(loginUserDto);
  }

  public async create(createUserDto: CreateUserDto): Promise<IUser> {
    const create = now();

    // check uniqueness of username
    const { username, password } = createUserDto;
    const repo = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.username = :username', { username });

    const user = await repo.getOne();
    if (user) {
      throw new HttpException(
        {
          message: 'Username Exist.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    // create new user
    let newUser = new UserEntity();
    newUser.username = username;
    newUser.password = password;
    newUser.create = create;

    const errors = await validate(newUser);
    console.log(errors);
    if (errors.length > 0) {
      throw new HttpException(
        {
          message: 'save User failed',
        },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const savedUser = await this.userRepository.save(newUser);
      return this.buildUser(savedUser);
    }
  }

  public generateJWT(user) {
    let expired = parseInt(((Date.now() + TOKEN_EXPIRED) / 1000).toString());

    return jwt.sign(
      {
        id: user.id,
        username: user.username,
        expired,
      },
      JWT_SECRET,
    );
  }

  private buildUser(user: UserEntity) {
    return { ...user, token: this.generateJWT(user) };
  }
}
