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

//   console.log(result);

//   return data?.identifier;
// };

// export default App;

import { useIntegration } from '@telegram-apps/react-router-integration';
import { initNavigator } from '@telegram-apps/sdk-react';
import { Card, List } from '@telegram-apps/telegram-ui';
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell';
import { CardChip } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip';
import { type FC, useContext, useEffect, useMemo } from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { IdentifierContext } from '../contexts';
import { useQuery } from '@apollo/client';
import { GetIdentifierQuery } from '../__generated__/graphql';
import { GET_IDENTIFIER } from './app.queries';
import { env } from '../env';

const IndexPage = () => {
  const imageUrls = [
    'https://dev-bmtc.s3.amazonaws.com/flowers.jpg',
    'https://dev-bmtc.s3.amazonaws.com/headphones.jpg',
    'https://dev-bmtc.s3.amazonaws.com/car.jpg',
    'https://dev-bmtc.s3.amazonaws.com/sneakers.jpg',
  ];

  return (
    <List>
      {Array.from({ length: 5 }, (_, index) => (
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
  // const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  // const [location, reactNavigator] = useIntegration(navigator);
  const value = useContext(IdentifierContext);

  const data = useQuery<GetIdentifierQuery>(GET_IDENTIFIER, {
    variables: { id: value?.identifier },
  });

  // postgresql mongoDBs table
  // unchained -> mongodb
  // const fieldName = db.getFieldName(identifier);
  // const fieldData = db[fieldName].getData();

  console.log(env.BASE_URL);
  console.log(data);

  // Don't forget to attach the navigator to allow it to control the BackButton state as well
  // as browser history.
  // useEffect(() => {
  // navigator.attach();
  // return () => navigator.detach();
  // }, [navigator]);

  return data?.data?.identifier?.id;

  // return (
  //   <Router location={location} navigator={reactNavigator}>
  //     <Routes>
  //       <Route path="/" element={<IndexPage />}></Route>
  //       <Route path="*" element={<Navigate to="/" />} />
  //     </Routes>
  //   </Router>
  // );
};
