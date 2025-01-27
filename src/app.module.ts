import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BloodModule } from './blood/blood.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    BloodModule,
  ],
})
export class AppModule {}
