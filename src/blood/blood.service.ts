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
    try {
      const newBlood = new this.bloodModel({ name, quantity, bloodType });
      return await newBlood.save();
    } catch (error) {
      console.error('Error creating blood record:', error);
      throw error;
    }
  }

  async findAll(): Promise<BloodType[]> {
    try {
      return await this.bloodModel.find().exec();
    } catch (error) {
      console.error('Error retrieving blood records:', error);
      throw error;
    }
  }

  async findById(id: string): Promise<BloodType | null> {
    try {
      return await this.bloodModel.findById(id).exec();
    } catch (error) {
      console.error('Error finding blood record by ID:', error);
      throw error;
    }
  }

  async update(id: string, updateData: Partial<BloodType>): Promise<BloodType | null> {
    try {
      return await this.bloodModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    } catch (error) {
      console.error('Error updating blood record:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<BloodType | null> {
    try {
      return await this.bloodModel.findByIdAndDelete(id).exec();
    } catch (error) {
      console.error('Error deleting blood record:', error);
      throw error;
    }
  }

  async use(id: string): Promise<BloodType | null> {
    try {
      return await this.bloodModel.findByIdAndUpdate(id, { usedAt: new Date() }, { new: true }).exec();
    } catch (error) {
      console.error('Error using blood record:', error);
      throw error;
    }
  }
}
