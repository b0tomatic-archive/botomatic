import { gql } from '@apollo/client';

export const GET_IDENTIFIER = gql`
  query GetIdentifier($id: String!) {
    identifier(id: $id) {
      id
    }
  }
`;
