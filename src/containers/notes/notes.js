import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import List from './list';
import Loading from './loading';
import Shell from './shell';

const Notes = () => (
  <Query
    query={gql`
      {
        allPosts {
          id
          content,
          createdAt,
          author {
            id, name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <p>Error :(</p>;
        return (
          <Shell>
            <List items={data.allPosts} />
          </Shell>
        );
    }}
  </Query>
);

export default Notes;

