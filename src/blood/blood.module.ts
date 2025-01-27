import { Module } from '@nestjs/common';
import { BloodResolver } from './blood.resolver';
import { BloodService } from './blood.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blood } from './blood.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blood])], // for database transaction
  providers: [BloodResolver, BloodService],
})
export class BloodModule {}
