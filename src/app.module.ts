import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BloodModule } from './blood/blood.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    BloodModule,
  ],
})
export class AppModule {}
