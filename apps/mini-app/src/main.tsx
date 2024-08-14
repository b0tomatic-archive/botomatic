// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
import './mockEnv';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './styles.scss';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './app/app';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Root } from './app/root';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  typeDefs: ['../../schema.graphql', '../../libs/schematics/**/*.graphql'],
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Root />
  // <StrictMode>
  //   <ApolloProvider client={client}>
  //     <App />
  //   </ApolloProvider>
  // </StrictMode>
);
