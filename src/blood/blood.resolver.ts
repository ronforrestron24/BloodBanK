import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { BloodType } from './blood.type';

@Resolver((of) => BloodType)
export class BloodResolver {
  @Query((returns) => BloodType)
  blood() {
    return {
      id: '1',
      name: 'John Doe',
      quantity: 100,
      createdAt: new Date(),
      usedAt: new Date(),
      bloodType: 'A',
    };
  }

  @Mutation((returns) => BloodType)
  createBlood() {}
}
