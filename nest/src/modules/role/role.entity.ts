import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ comment: '名称', unique: true })
  name: string;

  @Column({ comment: '标识', unique: true})
  token: string;

  @Column({ comment: '描述', default: null, nullable: true })
  desc: string;

  @ManyToMany(type => UserEntity, user => user.roles)
  @JoinTable({
    name: 'user_role',
    joinColumn: { name: 'role_id' },
    inverseJoinColumn: { name: 'user_id' },
  })
  users: UserEntity;
}
