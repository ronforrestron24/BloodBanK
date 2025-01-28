import { Module } from '@nestjs/common';
import { BloodResolver } from './blood.resolver';
import { BloodService } from './blood.service';
import { BloodType } from './blood.type';
import { BloodType } from './blood.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BloodType.name,
        schema: BloodType.schema,
      },
    ]),
  ], // for database transaction
  providers: [BloodResolver, BloodService],
})
export class BloodModule {}
