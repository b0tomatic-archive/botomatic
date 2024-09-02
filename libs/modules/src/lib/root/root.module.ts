import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from '@botomatic/resolvers';
import { User } from '@botomatic/entities';

import { serverEnv } from '@botomatic/env/server';
import { UsersModule, IdentifiersModule } from '../../';
import { join } from 'path';
// import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      serverEnv.IS_CI
        ? {
            type: 'better-sqlite3',
            database: ':memory:',

            entities: [join(__dirname, '../../', '**/*.entity{.ts,.js}')],
            autoLoadEntities: true,
            synchronize: false,
            logging: true,
          }
        : {
            type: 'postgres',
            host: serverEnv.DB_HOST,
            port: serverEnv.DB_PORT,
            username: serverEnv.DB_USER_NAME,
            password: serverEnv.DB_PASSWORD,
            database: serverEnv.DB_NAME,
            entities: [User],
            synchronize: true,
          }
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      introspection: serverEnv.NODE_ENV !== 'production',

      playground: false,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    UsersModule,
    PostsModule,
    IdentifiersModule,
  ],
})
export class RootModule {
  constructor(private dataSource: DataSource) {}
}
