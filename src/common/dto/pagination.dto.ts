import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, Matches } from 'class-validator';
import { regPositiveOrEmpty } from '@/utils/regex.util';

export class PaginationDTO {
  /**
   * 第几页
   * @example 1
   */
  @IsOptional()
  @Matches(regPositiveOrEmpty, { message: 'page 不可小于 0' })
  @ApiProperty({ description: 'page' })
  readonly page?: number;

  /**
   * 每页数据条数
   * @example 10
   */
  @IsOptional()
  @Matches(regPositiveOrEmpty, { message: 'pageSize 不可小于 0' })
  @ApiProperty({ description: 'pageSize' })
  readonly pageSize?: number;

  /**
   * 总页数
   * @example 10
   */
  pages: number;

  /**
   * 总条数
   * @example 100
   */
  total: number;

  // 数据
  records: any;
}
