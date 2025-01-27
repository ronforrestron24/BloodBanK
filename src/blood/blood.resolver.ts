import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BloodService } from './blood.service';
import { Blood } from './schema/blood.schema';

@Resolver((of) => Blood)
export class BloodResolver {
  constructor(private bloodService: BloodService) {}

  @Query((returns) => [Blood])
  async getAllBlood() {
    return this.bloodService.find();
  }

  @Mutation((returns) => Blood)
  async createBlood(@Args('blood') blood: Blood) {
    return this.bloodService.create(blood);
  }

  @Mutation((returns) => Blood)
  async updateBlood(@Args('blood') blood: Blood) {
    return this.bloodService.update(blood);
  }

  @Mutation((returns) => Blood)
  async deleteBlood(@Args('blood') blood: Blood) {
    return this.bloodService.delete(blood);
  }

  @Mutation((returns) => Blood)
  async deleteAllBlood() {
    return this.bloodService.deleteAll();
  }

  @Mutation((returns) => Blood)
  async getBloodById(@Args('id') id: string) {
    return this.bloodService.findById(id);
  }

  @Mutation((returns) => Blood)
  async getBloodByBloodType(@Args('bloodType') bloodType: string) {
    return this.bloodService.findByBloodType(bloodType);
  }
}
