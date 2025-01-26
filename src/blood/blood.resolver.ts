import { Resolver, Query } from '@nestjs/graphql';
import { Blood } from './models/blood.model';
import { BloodService } from './blood.service';

@Resolver(() => Blood)
export class BloodResolver {
  constructor(private readonly bloodService: BloodService) {}

  @Query(() => [Blood])
  async blood(): Promise<Blood[]> {
    return this.bloodService.findAll();
  }
}
