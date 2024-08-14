import { createContext } from 'react';

const DEFAULT_VALUE = null;

type Identifier = {
  identifier?: string;
};

export const IdentifierContext = createContext<Identifier | null>(
  DEFAULT_VALUE
);
