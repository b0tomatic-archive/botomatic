/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateUserInput = {
  /** `Testing comments` */
  exampleField: Scalars['Float']['input'];
};

export type Identifier = {
  __typename?: 'Identifier';
  id: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  removeUser: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  identifier: Identifier;
  identifiers: Array<Identifier>;
  posts: Array<Post>;
  user: User;
  users: Array<User>;
};


export type QueryIdentifierArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  /** `Testing comments` */
  exampleField?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Float']['input'];
};

export type User = {
  __typename?: 'User';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
  /** `Introspected comment` */
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type GetIdentifierQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetIdentifierQuery = { __typename?: 'Query', identifier: { __typename?: 'Identifier', id: string } };


export const GetIdentifierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIdentifier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetIdentifierQuery, GetIdentifierQueryVariables>;