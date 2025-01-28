import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BloodType } from './blood.entity';
import { BloodService } from './blood.service';

@Resolver(() => BloodType)
export class BloodResolver {
  constructor(private bloodService: BloodService) {}

  @Mutation((returns) => BloodType)
  createBlood(
    @Args('name') name: string,
    @Args('quantity') quantity: number,
    @Args('bloodtype') bloodtype: string,
  ) {
    return this.bloodService.create(name, quantity, bloodtype);
  }
}
