import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ObjectType,
  ID,
  Field,
} from '@nestjs/graphql';
import { Identifier, User } from '@botomatic/entities';
import { UpdateUserInput, CreateUserInput } from '@botomatic/entities';
import { UsersService } from '@botomatic/services';
import { Module } from '@nestjs/common';

@Resolver(() => Identifier)
export class IdentifierResolver {
  @Query(() => [Identifier], { name: 'identifiers' })
  findAll() {
    return [{ id: 'home' }, { id: 'app' }];
  }

  @Query(() => Identifier, { name: 'identifier' })
  findOne(@Args('id', { type: () => String }) id: string) {
    if (id === 'app01') {
      return { id: 'Config 01' };
    } else if (id === 'app02') {
      return { id: 'Config 02' };
    }
    return { id: 'Default Config' };
  }
}

@ObjectType()
export class Post {
  @Field((returns) => Int, { nullable: true })
  id?: number;
}

@Resolver(() => Post)
export class PostsResolver {
  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return [
      {
        id: 100,
      },
    ];
  }
}

@Module({
  imports: [],
  providers: [PostsResolver],
})
export class PostsModule {}

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
