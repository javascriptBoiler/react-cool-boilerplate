import ApolloClient from 'apollo-boost';
import config from 'config';

export const client = new ApolloClient({
  uri: config.API_URL,
  request: (operation) => {
    operation.setContext({
      headers: {
        Authorization: config.TOKEN,
      },
    });
  },
});
