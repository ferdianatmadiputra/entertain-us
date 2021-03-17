import { ApolloClient, InMemoryCache } from '@apollo/client';
import { favoritesVar } from '../graph/vars';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        favorites : {
          read() {
            return favoritesVar()
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache
});
export default client