import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import {
  IsEmail,
  MaxLength,
  MinLength,
  Contains,
  IsNotEmpty,
} from 'class-validator';
import * as crypto from 'crypto';

enum Gender {
  UNKNOWN,
  MALE,
  FEMALE,
}

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @MaxLength(4)
  username: string;

  @Column()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  // @Column({ default: null })
  // @IsEmail()
  // email: string;

  // @Column({ default: null })
  // role: string;

  @Column('enum', {
    enum: Gender,
    default: 0,
  })
  gender: number;

  @Column({ default: '' })
  avatar: string;
}
