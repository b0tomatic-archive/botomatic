import './app.module.scss';

import { useQuery } from '@apollo/client';
import {
  GetUserQuery,
  GetUserWithExampleFieldDocument,
  GetUserWithExampleFieldQuery,
} from '../__generated__/graphql';
import { GET_USER, GET_USERS_WITH_EXAMPLE_FIELD } from './app.queries';
import { env } from '../env';

export function App() {
  const { data: withExampleField } = useQuery<GetUserWithExampleFieldQuery>(
    GET_USERS_WITH_EXAMPLE_FIELD
  );
  const { data: data } = useQuery<GetUserQuery>(GET_USER, {
    variables: { id: 1 },
  });

  console.log(withExampleField, data);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '5px',
        }}
      >
        {withExampleField?.users.map(({ firstName }, i) => (
          <p key={i}>{firstName}</p>
        ))}
      </div>
      {data?.user && (
        <div style={{ display: 'flex', gap: '5px' }}>
          <p>{data.user.id}</p>
          <p>{data.user.firstName}</p>
          <p>{data.user.lastName}</p>
        </div>
      )}
    </>
  );
}

export default App;
