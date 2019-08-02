import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { IsEmail } from 'class-validator';
import * as crypto from 'crypto';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  // @Column({ default: null })
  // @IsEmail()
  // email: string;

  @Column({ default: '' })
  avatar: string;

  @Column()
  create: number;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
}
