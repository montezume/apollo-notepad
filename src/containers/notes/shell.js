import React from 'react';
import styled from 'styled-components';

import Page from '../../elements/layout/page';
import Section, { SectionInner } from '../../elements/section';

// const Section = styled.div`
//   max-width: 1000px;
// `;
 
const Shell = ({children}) => (
  <Page>
    <Section>
      <SectionInner>
        {children}
      </SectionInner>
    </Section>
  </Page>
);

export default Shell;
