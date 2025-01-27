import { Module } from '@nestjs/common';
import { BloodResolver } from './blood.resolver';

@Module({
  providers: [BloodResolver],
})
export class BloodModule {}
