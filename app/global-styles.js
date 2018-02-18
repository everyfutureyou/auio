import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size:1.02em;
  }

  body {
    font-family: 'Joanna Sans W01 Light', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Joanna Sans W01 Light', sans-serif;
  }

  #app {
    background-color: whitesmoke;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Joanna Sans W01 Light', sans-serif;

    line-height: 1.5em;
  }
`;
