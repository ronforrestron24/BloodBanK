import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BloodType } from './blood.type';
import { BloodService } from './blood.service';

@Resolver((of) => BloodType)
export class BloodResolver {
  constructor(private bloodService: BloodService) {}

  // @Query((returns) => BloodType)
  // blood(
  //   @Args('name') name: string,
  //   @Args('quantity') quantity: number,
  //   @Args('bloodType') bloodType: string,
  // ) {
  //   return this.bloodService.getBlood();
  // }

  @Mutation((returns) => BloodType)
  createBlood(
    @Args('name') name: string,
    @Args('quantity') quantity: number,
    @Args('bloodType') bloodType: string,
  ) {
    return this.bloodService.create(name, quantity, bloodType);
  }
}
