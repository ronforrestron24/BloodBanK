import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { BloodType } from './blood/blood.entity'; // Adjust path as needed
import { BloodModule } from './blood/blood.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),

    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'bloodbank',
    }),

    // Blood Module
    BloodModule,
  ],
})
export class AppModule {}
