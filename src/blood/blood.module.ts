import { Module } from '@nestjs/common';
import { BloodService } from './blood.service';
import { BloodController } from './blood.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Blood, BloodSchema } from './schema/blood.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blood.name, schema: BloodSchema }]),
  ],
  providers: [BloodService],
  controllers: [BloodController],
})
export class BloodModule {}
