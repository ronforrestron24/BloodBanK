//entity is typeorm specific

import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@ObjectType() // Marks this as a GraphQL type
@Entity()
export class BloodType {
  @Field()
  @ObjectIdColumn()
  _id: string;

  @Field()
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  quantity: number;

  @Field()
  @Column()
  createdAt: Date;

  @Field()
  @Column()
  usedAt: Date;

  @Field()
  @Column()
  bloodtype: string;
}
