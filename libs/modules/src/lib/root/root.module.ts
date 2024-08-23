import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'node:path';
import { PostsModule } from '@botomatic/resolvers';
import * as process from 'node:process';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '@botomatic/entities';

//const IS_CI = process.env.IS_CI === 'true';
const IS_CI = false;
import { serverEnv } from '@botomatic/env/server';
import { UsersModule, IdentifiersModule } from '../../';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get('DB_HOST'),
        port: ConfigService.get('DB_PORT'),
        username: ConfigService.get('DB_USER_NAME'),
        password: ConfigService.get('DB_PASSWORD'),
        database: ConfigService.get('DB_NAME'),
        // for me explicitly enumrating schemas in an array
        // is more convenient
        // can discuss though
        entities: [User],
        //entities: [join(__dirname, '../../', '**/*.entity{.ts,.js}')],
        synchronize: true,
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // process.env.NODE_ENV === 'production' || join(__dirname, 'assets/schema.graphql')
      sortSchema: true,
      introspection: process.env.NODE_ENV !== 'production',

      // playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
    UsersModule,
    PostsModule,
    IdentifiersModule,
  ],
})
export class RootModule {
  constructor(private dataSource: DataSource) {}
}
