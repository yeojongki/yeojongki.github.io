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
  })
  readonly createdAt: number;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  readonly updatedAt: number;

  @Column({ unique: true })
  username: string;

  @Column({ type: 'char', length: 64 })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @Column({ default: null })
  email: string;

  @Column({ default: null })
  mobile: string;

  @Column('enum', {
    enum: Gender,
    default: 0,
  })
  gender: number;

  @Column({ default: null })
  avatar: string;

  @ManyToMany(type => RoleEntity, role => role)
  @JoinTable({
    name: 'user_role',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'role_id' },
  })
  roles: RoleEntity[];
}
