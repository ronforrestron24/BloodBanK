import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose';
import { Blood, BloodDocument } from './schema/blood.schema';

@Injectable()
export class BloodService {
  constructor(@InjectModel(Blood.name) private bloodModel: Model<BloodDocument>) {
    constructor(@InjectModel(Blood.id)private bloodModel: Model<BloodDocument>) {

      async find(): Promise<Blood[]> {
        return this.bloodModel.find().exec();
      }
    }
  }
}
