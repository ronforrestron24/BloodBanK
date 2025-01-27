import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blood, BloodDocument } from './schema/blood.schema';

@Injectable()
export class BloodService {
  constructor(
    @InjectModel(Blood.name) private bloodModel: Model<BloodDocument>,
  ) {}

  async findAll(): Promise<Blood[]> {
    return this.bloodModel.find().exec();
  }

  async findById(id: string): Promise<Blood> {
    return this.bloodModel.findById(id).exec();
  }

  async findByBloodType(bloodType: string): Promise<Blood> {
    return this.bloodModel.find({ bloodType }).exec();
  }

  async create(blood: Blood): Promise<Blood> {
    return this.bloodModel.create(blood);
  }

  async update(blood: Blood): Promise<Blood> {
    return this.bloodModel.findByIdAndUpdate(blood.id, blood).exec();
  }

  async delete(id: string): Promise<Blood> {
    return this.bloodModel.findByIdAndDelete(id).exec();
  }
}
