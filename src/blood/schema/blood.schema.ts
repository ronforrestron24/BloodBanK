import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType, ID } from '@nestjs/graphql';

@Schema({ timestamps: true })
@ObjectType() // GraphQL Type
export class BloodType extends Document {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ required: true })
  @Field()
  quantity: number;

  @Prop({ required: true })
  @Field()
  bloodType: string; // Renamed from "type" to match resolver

  @Prop({ default: Date.now })
  @Field()
  createdAt: Date;

  @Prop()
  @Field()
  usedAt: Date;
}

export const BloodSchema = SchemaFactory.createForClass(BloodType);
