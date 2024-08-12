import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import WebApp from '@twa-dev/sdk';
import App from './app/app';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

WebApp.ready();

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  typeDefs: ['../../schema.graphql', '../../libs/schematics/**/*.graphql'],
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
