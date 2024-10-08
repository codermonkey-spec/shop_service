import {
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  VersionColumn,
} from 'typeorm';

export abstract class Base {
  // 主键id
  @PrimaryGeneratedColumn()
  id: number;

  // 创建时间
  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  // 更新时间
  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  // 逻辑删除
  @Column({
    default: 0,
    select: false,
    name: 'del_flag',
  })
  delFlag: number;
}
