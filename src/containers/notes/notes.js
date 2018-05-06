import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import List from './list';
import Loading from './loading';
import Shell from './shell';

import { getNotes } from '../../graphql/notes';

const Notes = () => (
  <Query
    query={getNotes}
  >
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return <p>Error :(</p>;
        return (
          <Shell>
            <List items={data.allNotes} />
          </Shell>
        );
    }}
  </Query>
);

export default Notes;

