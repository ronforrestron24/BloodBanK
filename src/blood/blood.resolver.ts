import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BloodType } from './schema/blood.schema';
import { BloodService } from './blood.service';
import { UpdateBloodDto } from './dto/update-blood.dto';

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

  @Mutation(() => BloodType)
  async updateBlood(
    @Args('id') id: string,
    @Args('updateData') updateData: UpdateBloodDto,
  ): Promise<BloodType | null> {
    return this.bloodService.update(id, updateData);
  }

  @Mutation(() => BloodType)
  async deleteBlood(@Args('id') id: string): Promise<BloodType | null> {
    return this.bloodService.delete(id);
  }

  @Mutation(() => BloodType)
  async useBlood(@Args('id') id: string): Promise<BloodType | null> {
    return this.bloodService.use(id);
  }
  
}
