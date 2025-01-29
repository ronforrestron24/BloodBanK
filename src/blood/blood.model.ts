import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Blood {
  @Field((type) => ID)
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
  bloodType: string;
}
