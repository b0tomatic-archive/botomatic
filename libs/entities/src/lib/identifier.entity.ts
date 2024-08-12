import { ObjectType } from '@nestjs/graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Identifier extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;
}
