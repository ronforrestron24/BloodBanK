import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type BloodDocument = HydratedDocument<Blood>;

@Schema()
export class Blood {
  @Prop()
  id: string = uuidv4();

  @Prop({ required: true })
  bloodType: string;

  @Prop({ required: true })
  quantity: number;

  @Prop()
  createdAt: Date = new Date();

  @Prop()
  updatedAt: Date = new Date();

  @Prop()
  reasonOfUse: string;
}

export const BloodSchema = SchemaFactory.createForClass(Blood);
