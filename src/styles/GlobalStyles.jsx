import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #121212; 
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  input, textarea {
    font-family: inherit;
    background: none;
    border: none;
    color: #fff;
  }


  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1db954;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export default GlobalStyles;
