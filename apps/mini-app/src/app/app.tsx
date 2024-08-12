import './app.module.scss';

import { useContext } from 'react';
import { IdentifierContext, IdentifierProvider } from './contexts';
import { GET_IDENTIFIER } from './app.queries';
import { GetIdentifierQuery } from '../__generated__/graphql';
import { useQuery } from '@apollo/client';

const App = () => {
  return (
    <IdentifierProvider>
      <Component />
    </IdentifierProvider>
  );
};

const Component = () => {
  const data = useContext(IdentifierContext);

  const { data: result } = useQuery<GetIdentifierQuery>(GET_IDENTIFIER, {
    variables: { id: data?.identifier },
  });

  console.log(result);

  return data?.identifier;
};

export default App;
