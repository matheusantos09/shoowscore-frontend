import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --height-header-float: 64px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: black;
    line-height: 1.36;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--color_text);
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }
`;

export default GlobalStyle;
