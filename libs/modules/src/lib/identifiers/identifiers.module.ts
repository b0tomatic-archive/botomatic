import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdentifierResolver } from '@botomatic/resolvers';
import { Identifier } from '@botomatic/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Identifier])],
  providers: [IdentifierResolver],
})
export class IdentifiersModule {}
