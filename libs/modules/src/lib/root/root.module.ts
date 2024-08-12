import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'node:path';
import { PostsModule } from '@botomatic/resolvers';
import { serverEnv } from '@botomatic/env/server';
import { UsersModule, IdentifiersModule } from '../../';

@Module({
  imports: [
    // https://stackoverflow.com/questions/55366037/inject-typeorm-repository-into-nestjs-service-for-mock-data-testing
    TypeOrmModule.forRoot(
      true // serverEnv.IS_CI
        ? {
            type: 'better-sqlite3',
            database: ':memory:',

            entities: [join(__dirname, '../../', '**/*.entity{.ts,.js}')],
            autoLoadEntities: true,
            synchronize: false,
            logging: true,
          }
        : {
            type: 'mysql', // 'better-sqlite3',
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT as unknown as number,
            username: process.env.MYSQL_USERNAME,
            database: process.env.MYSQL_NAME, // './db.sqlite3',
            // password: 'root',

            entities: [join(__dirname, '../../', '**/*.entity{.ts,.js}')],
            autoLoadEntities: true,
            synchronize: false,
            logging: true,
          }
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // process.env.NODE_ENV === 'production' || join(__dirname, 'assets/schema.graphql')
      sortSchema: true,
      introspection: serverEnv.NODE_ENV !== 'production',

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
