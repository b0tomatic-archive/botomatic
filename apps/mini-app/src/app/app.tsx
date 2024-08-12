import './app.module.scss';
import WebApp from '@twa-dev/sdk';
import { parse } from 'tldts';
import { last } from 'lodash';
import { env } from '../env';

function App() {
  const { subdomain } = parse(window.location.hostname, {
    validHosts: [env.NX_PUBLIC_HOST],
  });

  const subdomains = subdomain
    ?.split('.')
    .filter((subdomain) => subdomain !== 'www');

  const identifier = last(subdomains);

  WebApp.BackButton.show();

  return <>{identifier}</>;
}

export default App;
