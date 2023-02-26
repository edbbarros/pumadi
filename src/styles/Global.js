import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #660099;
    font-family: 'Gotham';
  }
  button,
  input {
    outline: 0;
  }
  button {
    cursor: pointer;
  } 
`;