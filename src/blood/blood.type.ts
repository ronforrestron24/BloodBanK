import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BloodType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  quantity: number;

  @Field()
  createdAt: Date;

  @Field()
  usedAt: Date;

  @Field()
  bloodType: string;
}
