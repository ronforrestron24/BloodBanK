import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Blood extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  bloodType: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  usedAt: Date;
}

export const BloodSchema = SchemaFactory.createForClass(Blood);
