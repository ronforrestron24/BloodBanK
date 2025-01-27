import { Controller, Get } from '@nestjs/common';
import { BloodService } from './blood.service';
import { Blood } from './models/blood.model';

@Controller('blood')
export class BloodController {
  constructor(private readonly bloodService: BloodService) {}

  @Get()
  async findAll(): Promise<Blood[]> {
    return this.bloodService.findAll();
  }
}
