import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: hsl(0, 0%, 100%);

    --gray-200: hsl(228, 33%, 97%);
    --gray-300: hsl(223, 19%, 93%);
    --gray-400: hsl(211, 10%, 45%);
    --gray-600: hsl(212, 24%, 26%);

    --color-primary: hsl(238, 40%, 52%);
    --color-primary-light: hsl(239, 57%, 85%);

    --color-danger: hsl(358, 79%, 66%);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;

  }

  body {
    background: var(--gray-200);
  }

  button {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export default GlobalStyles;
