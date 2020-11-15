import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`

  @font-face {
        font-family: 'roboto';
        src: url('../assets/font/RobotoSlab-VariableFont_wght.ttf') format('ttf'),
  }

  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  body {
    background: linear-gradient(90deg,rgba(42,41,46,1) 0%,rgb(41 41 62) 80%,rgba(42,41,46,1) 100%);
    font-family: 'roboto';
    min-height: 100%;
    color: white;
    display: flex;
    flex-direction:column;

  }

  a {
    text-decoration: none;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  table {
    border-collapse: collapse;
  }
  li {
    list-style:none;
  }

  p {
    margin-top: 0;
  }
  `;

// export const breakpoint = {
//   mediumDown: '@media screen and (max-width: 1280px)',
//   large: '@media screen and (min-width: 1281px)',
//   xlarge: '@media screen and (min-width: 1450px)',
//   xxlarge: '@media screen and (min-width: 1700px)',
// };

export default GlobalStyles;
