import './app.module.scss';
import WebApp from '@twa-dev/sdk';
import { useState } from 'react';
import { env } from '../env';
import { parse } from 'tldts';
import { last } from 'lodash';

function App() {
  const [count, setCount] = useState(0);

  const { subdomain } = parse(window.location.hostname, {
    validHosts: ['localhost'],
  });

  const subdomains = subdomain
    ?.split('.')
    .filter((subdomain) => subdomain !== 'www');

  const identifier = last(subdomains);

  WebApp.BackButton.show();

  return <>{identifier}</>;
}

export default App;
