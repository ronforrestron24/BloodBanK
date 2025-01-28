import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blood } from './blood.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BloodService {
  constructor(
    @InjectRepository(Blood) private bloodRepository: Repository<Blood>,
  ) {}

  async create(name: string, quantity: number, bloodtype: string) {
    const newBlood = this.bloodRepository.create({
      id: uuid(),
      name,
      quantity,
      bloodtype,
    });

    const savedBlood = await this.bloodRepository.save(newBlood);
    return savedBlood;
  }
}
