import {gql} from '@apollo/client';

export const query = gql`
  query {
    episodes {
      results {
        id
        name
        air_date
      }
    }
  }
`;
