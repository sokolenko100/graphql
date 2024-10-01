import {ApolloProvider} from '@apollo/react-hooks';
import React, {FC} from 'react';
import {client} from './api/apollo-client';
import {Episodes} from './components/episodes';

export const App: FC = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <Episodes />
    </ApolloProvider>
  );
};
