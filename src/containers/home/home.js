import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Home = () => (
  <Query
    query={gql`
      {
        allUsers {
          id
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        console.log('data', data);
        return (
          <div>ok</div>
        )
    }}
  </Query>
);

export default Home;

