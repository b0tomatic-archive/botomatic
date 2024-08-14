// import './app.module.scss';

// import { useContext } from 'react';
// import { IdentifierContext, IdentifierProvider } from './contexts';
// import { GET_IDENTIFIER } from './app.queries';
// import { GetIdentifierQuery } from '../__generated__/graphql';
// import { useQuery } from '@apollo/client';

// const App = () => {
//   return (
//     <IdentifierProvider>
//       <Component />
//     </IdentifierProvider>
//   );
// };

// const Component = () => {
//   const data = useContext(IdentifierContext);

//   const { data: result } = useQuery<GetIdentifierQuery>(GET_IDENTIFIER, {
//     variables: { id: data?.identifier },
//   });

//   console.log(result);

//   return data?.identifier;
// };

// export default App;

import { useIntegration } from '@telegram-apps/react-router-integration';
import { initNavigator } from '@telegram-apps/sdk-react';
import { type FC, useEffect, useMemo } from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';

const IndexPage = () => {
  return 'Hello World!';
};

export const App: FC = () => {
  // Create a new application navigator and attach it to the browser history, so it could modify
  // it and listen to its changes.
  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  // Don't forget to attach the navigator to allow it to control the BackButton state as well
  // as browser history.
  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <Router location={location} navigator={reactNavigator}>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
