import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";

import client from '../../graphql/client';

import Home from '../home';

// import Page from '../../elements/layout/page';
// import Section, { SectionInner } from '../../elements/section';
// 
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

export default App;
