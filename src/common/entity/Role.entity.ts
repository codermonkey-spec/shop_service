import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Base } from './Base.entity';
import { Permission } from './Permission.entity';

@Entity('role')
export class Role extends Base {
  @Column()
  name: string;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'role_permission_relation',
  })
  permissions: Permission[];
}
