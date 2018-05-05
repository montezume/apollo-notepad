import React from 'react';
import { node } from 'prop-types';

const propTypes = {
  children: node,
};

const Page = ({ children }) => (
  <main>
    {children}
  </main>
);

Page.propTypes = propTypes

export default Page;