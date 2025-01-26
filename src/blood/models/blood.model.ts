import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Blood {
  @Field(() => ID)
  id: string;

  @Field()
  bloodType: string;

  @Field()
  quantity: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  reasonOfUse: string;
}
