import { createGlobalStyle } from 'styled-components';
const { normalize } = require('styled-normalize');

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 62.5%
  }

  body {
    @import url(http://fonts.googleapis.com/css?family=Open+Sans);
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 1.6rem;
  }

  .ReactModalPortal .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

export default GlobalStyle;
