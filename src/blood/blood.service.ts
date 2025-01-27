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

  async create(bloodData: Partial<Blood>): Promise<Blood> {
    //create object
    const { name, quantity, bloodType } = bloodData as {
      name: string;
      quantity: number;
      bloodType?: string;
    };
    const newBlood = this.bloodRepository.create({
      id: uuid(),
      name,
      quantity,
      bloodtype: bloodType,
    });

    const savedBlood = await this.bloodRepository.save(newBlood);
    return savedBlood;
  }
}
