import { Module } from '@nestjs/common';
import { BloodResolver } from './blood.resolver';
import { BloodService } from './blood.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Blood, BloodSchema } from './schema/blood.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blood.name, schema: BloodSchema }]),
  ],
  providers: [BloodResolver, BloodService],
})
export class BloodModule {}
