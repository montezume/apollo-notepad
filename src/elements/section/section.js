import styled from 'styled-components';

import breakpoint from '../../theme/breakpoint';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: grey;
`;

export const StyledSectionInner = styled.div`
  max-width: 730px;
  text-align: left;
  // padding: 60px 40px 0 40px;

  ${breakpoint('medium', `
    // padding: 100px 30px 60px 30px;
  `)}
`;

export default StyledSection;