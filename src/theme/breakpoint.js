const breakpoints = {
  small: 550,
  medium: 834,
  large: 1000,
};

const breakpoint = (size, css) => `
  @media (min-width: ${breakpoints[size]}px) {
    ${css}
  }
`;

export { breakpoints };

export default breakpoint;
