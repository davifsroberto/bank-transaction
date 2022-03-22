import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray: #9eadba;
    --gray-light: #c1cdd8;
    --gray-dark: #223442;

    --border-gray-light: 2px solid var(--gray-light);
    --border-radius-default: 3px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body, input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--gray-dark);
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: var(--gray-dark);
  }
`;
