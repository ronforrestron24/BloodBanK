import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BloodType } from './schema/blood.schema';

@Injectable()
export class BloodService {
  constructor(
    @InjectModel(BloodType.name)
    private readonly bloodModel: Model<BloodType>,
  ) {}

  async create(
    name: string,
    quantity: number,
    bloodType: string,
  ): Promise<BloodType> {
    const newBlood = new this.bloodModel({ name, quantity, bloodType });
    return newBlood.save();
  }

  async findAll(): Promise<BloodType[]> {
    return this.bloodModel.find().exec();
  }

  async findById(id: string): Promise<BloodType | null> {
    const bloodType = await this.bloodModel.findById(id).exec();
    return bloodType;
  }
}
