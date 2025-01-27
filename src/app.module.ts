import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BloodModule } from './blood/blood.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blood } from './blood/blood.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/blood',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Blood],
    }),
  ],
})
export class AppModule {}
