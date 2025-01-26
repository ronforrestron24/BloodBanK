import { Controller } from '@nestjs/common';
import { BloodService } from './blood.service';

@Controller('blood')
export class BloodController {
  constructor(private readonly bloodService: BloodService) {}

  @Get()
  async findAll(): Promise<Blood[]> {
    return this.bloodService.find();
  }
}
