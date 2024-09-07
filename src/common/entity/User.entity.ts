import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Base } from './Base.entity';
import { RoleEntity } from './Role.entity';

@Entity('users')
export class UserEntity extends Base {
  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToOne(() => RoleEntity, (users) => users.id)
  role: RoleEntity[];
}
