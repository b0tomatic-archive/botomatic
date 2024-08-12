import './app.module.scss';
import { useContext } from 'react';
import { IdentifierContext, IdentifierProvider } from './contexts';

const App = () => {
  return (
    <IdentifierProvider>
      <Component />
    </IdentifierProvider>
  );
};

const Component = () => {
  const data = useContext(IdentifierContext);

  return data?.identifier;
};

export default App;
