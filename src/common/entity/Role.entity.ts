import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Base } from './Base.entity';
import { UserEntity } from './User.entity';

@Entity('roles')
export class RoleEntity extends Base {
  @Column()
  name: string;
}
