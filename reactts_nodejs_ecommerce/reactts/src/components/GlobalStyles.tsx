import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border-spacing: 0;
    box-sizing: border-box;
    background-color: rgb(236, 236, 236);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  a{
    text-decoration-line: none;
    color: unset;
  }
`;
 
export default GlobalStyle;