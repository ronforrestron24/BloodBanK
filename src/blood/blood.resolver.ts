import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Blood } from './schema/blood.schema';
import { BloodService } from './blood.service';

@Resolver(() => Blood)
export class BloodResolver {
  constructor(private bloodService: BloodService) {}

  @Mutation((returns) => Blood)
  createBlood(
    @Args('name') name: string,
    @Args('quantity') quantity: number,
    @Args('bloodType') bloodType: string,
  ) {
    return this.bloodService.create(name, quantity, bloodType);
  }
}
