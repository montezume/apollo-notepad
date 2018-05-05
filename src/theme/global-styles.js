import breakpoint from './breakpoint';
import font from './font';
import color from './color';
import reset from './reset';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Dosis:300,400,600,700,800');

  ${reset}
  
  html {
    height: 100%;
  }

  body {
    color: ${color.black};
    font-size: 16px;
    font-family: ${font.family};
    font-weight: ${font.regular};
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    height: 100%;

    ${breakpoint('small', `
      font-size: 20px;
    `)}
  }
  
  main, #root {
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export default globalStyles;
