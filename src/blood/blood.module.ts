import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BloodService } from './blood.service';
import { BloodResolver } from './blood.resolver';
import { BloodType, BloodSchema } from './schema/blood.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BloodType.name, schema: BloodSchema }]),
  ],
  providers: [BloodService, BloodResolver],
})
export class BloodModule {}
