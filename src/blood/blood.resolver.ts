import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BloodType } from './schema/blood.schema';
import { BloodService } from './blood.service';

@Resolver(() => BloodType)
export class BloodResolver {
  constructor(private readonly bloodService: BloodService) {}

  @Mutation(() => BloodType)
  async createBlood(
    @Args('name') name: string,
    @Args('quantity') quantity: number,
    @Args('bloodType') bloodType: string,
  ): Promise<BloodType> {
    return this.bloodService.create(name, quantity, bloodType);
  }

  @Query(() => BloodType)
  async getById(@Args('id') id: string): Promise<BloodType | null> {
    return this.bloodService.findById(id);
  }

  @Query(() => [BloodType])
  async getAll(): Promise<BloodType[]> {
    return this.bloodService.findAll();
  }
}
