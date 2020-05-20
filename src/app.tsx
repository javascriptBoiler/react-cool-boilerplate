import React from 'react';
import AppRouter from './components/common/routes';

import { ApolloProvider } from '@apollo/react-hooks';
import { client } from 'graphql/client';
import GlobalContextProvider from 'context/global-context-provider';

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalContextProvider>
        <div className='App'>
          <AppRouter />
        </div>
      </GlobalContextProvider>
    </ApolloProvider>
  );
}

export default App;
