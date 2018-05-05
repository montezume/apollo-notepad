import React, { Component } from 'react';
import Page from '../../elements/layout/page';
import Section, { SectionInner } from '../../elements/section';

class App extends Component {
  render() {
    return (
      <Page>
        <Section>
          <SectionInner>
            Hello world
          </SectionInner>
        </Section>
      </Page>
    );
  }
}

export default App;
