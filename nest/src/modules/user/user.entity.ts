import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { IsEmail, MaxLength, MinLength, Contains } from 'class-validator';
import * as crypto from 'crypto';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  // @Contains('test', {message: 'username must contains `test`'})
  @IsEmail()
  @MaxLength(15, { message: 'username is too long' })
  username: string;

  // @Column({ default: null })
  // @IsEmail()
  // email: string;

  // @Column({ default: null })
  // role: string;

  @Column({ default: '' })
  avatar: string;

  @Column()
  @MinLength(6, { message: 'passwold is too short' })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
}
