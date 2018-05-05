import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Notes from '../notes';

const Home = () => (
  <Query
    query={gql`
      {
        allUsers {
          id
          name,
          posts {
            id, content
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        console.log('data', data);
        return (
          <div><Notes /></div>
        )
    }}
  </Query>
);

export default Home;

