import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Base } from './Base.entity';
import { Role } from './Role.entity';

@Entity('user')
export class UserEntity extends Base {
  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'user_role_relation',
  })
  roles: Role[];
}
