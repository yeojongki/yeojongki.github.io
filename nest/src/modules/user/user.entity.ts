import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import {
  IsEmail,
  MaxLength,
  MinLength,
  Contains,
  IsNotEmpty,
} from 'class-validator';
import * as crypto from 'crypto';
import { RoleEntity } from '../role/role.entity';

enum Gender {
  UNKNOWN,
  MALE,
  FEMALE,
}

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  @MaxLength(16)
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

  @Column()
  // @MaxLength(30)
  mobile: string;

  @Column('enum', {
    enum: Gender,
    default: 0,
  })
  gender: number;

  @Column()
  avatar: string;

  @ManyToMany(type => RoleEntity, role => role)
  @JoinTable({
    name: 'user_role',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'role_id' },
  })
  roles: RoleEntity[];
}
