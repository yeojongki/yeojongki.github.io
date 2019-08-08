import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as crypto from 'crypto';
import { RoleEntity } from '../role/role.entity';
import {
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_MOBILE,
  MAX_LENGTH_USERNAME,
} from '@/constants/validate.const';

export enum Gender {
  UNKNOWN,
  MALE,
  FEMALE,
}

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  readonly createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  readonly updatedAt: Date;

  @Column({ type: 'varchar', length: MAX_LENGTH_USERNAME })
  username: string;

  @Column({ type: 'char', length: 64 })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @Column({ type: 'varchar', length: MAX_LENGTH_EMAIL, default: null })
  email: string;

  @Column({ type: 'varchar', length: MAX_LENGTH_MOBILE, default: '' })
  mobile: string;

  @Column('enum', {
    enum: Gender,
    default: 0,
  })
  gender: number;

  @Column({ default: '' })
  avatar: string;

  @ManyToMany(type => RoleEntity, role => role)
  @JoinTable({
    name: 'user_role',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'role_id' },
  })
  roles: RoleEntity[];
}
