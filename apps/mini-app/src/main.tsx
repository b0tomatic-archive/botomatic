import { mockTelegramEnv } from './utils';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './styles.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {
  IdentifierProvider,
  MiniAppSDKProvider,
  MiniAppViewProvider,
} from './providers';
import { env } from './env';

// Uncomment this in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
if (env.DEV) {
  mockTelegramEnv();
}

// TODO: Replace on urql
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  typeDefs: ['../../schema.graphql', '../../libs/schematics/**/*.graphql'],
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <MiniAppSDKProvider>
      <MiniAppViewProvider>
        <ApolloProvider client={client}>
          <IdentifierProvider>
            <App />
          </IdentifierProvider>
        </ApolloProvider>
      </MiniAppViewProvider>
    </MiniAppSDKProvider>
  </StrictMode>
);
