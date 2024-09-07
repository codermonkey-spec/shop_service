import { Column, Entity } from 'typeorm';
import { Base } from './Base.entity';

@Entity('permission')
export class Permission extends Base {
  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 100,
    nullable: true,
  })
  desc: string;
}
