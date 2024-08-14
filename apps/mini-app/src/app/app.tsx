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
import { Card, List } from '@telegram-apps/telegram-ui';
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell';
import { CardChip } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip';
import { type FC, useEffect, useMemo } from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';

const IndexPage = () => {
  const imageUrls = [
    'https://dev-bmtc.s3.amazonaws.com/flowers.jpg',
    'https://dev-bmtc.s3.amazonaws.com/headphones.jpg',
    'https://dev-bmtc.s3.amazonaws.com/car.jpg',
    'https://dev-bmtc.s3.amazonaws.com/sneakers.jpg',
  ];

  return (
    <List>
      {Array.from({ length: 500 }, (_, index) => (
        <Card key={index}>
          <>
            <CardChip readOnly>Hot place</CardChip>
            <img
              alt="Dog"
              src={imageUrls[Math.floor(Math.random() * imageUrls.length)]}
              style={{
                display: 'block',
                height: 308,
                objectFit: 'cover',
                width: 254,
              }}
            />
            <CardCell readOnly subtitle="United states">
              New York
            </CardCell>
          </>
        </Card>
      ))}
    </List>
  );
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
