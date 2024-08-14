import { last } from 'lodash';
import { IdentifierContext } from './IdentifierContext';
import { parse } from 'tldts';
import { env } from '../../env';
import { useEffect, useState } from 'react';

// TODO: Refactor, put in a lib
type IdentifierProviderProps = {
  children?: React.ReactNode;
};

export const IdentifierProvider = ({ children }: IdentifierProviderProps) => {
  const { subdomain } = parse(window.location.hostname, {
    validHosts: [env.NX_PUBLIC_HOST],
  });

  const subdomains = subdomain
    ?.split('.')
    .filter((subdomain) => subdomain !== 'www');

  const identifier = last(subdomains);

  return (
    <IdentifierContext.Provider value={{ identifier }}>
      {children}
    </IdentifierContext.Provider>
  );
};
