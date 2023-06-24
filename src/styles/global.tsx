import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      font-family: ${theme.font.family};
      color: ${theme.colors.black};
    }

    body {
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.gray_50};
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
    }
    p {
      color: ${theme.colors.black};
      font-size: ${({ theme }) => theme.font.sizes.xsmall};
      @media (min-width: 425px) {
        font-size: ${theme.font.sizes.medium};
      }
      @media (min-width: 768px) {
        font-size: ${theme.font.sizes.xlarge};
      }
    }
    h1 {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.weight.normal};
      @media (min-width: 425px) {
        font-size: ${theme.font.sizes.huge};
      }
      @media (min-width: 768px) {
        font-size: ${theme.font.sizes.xxxhuge};
      }
    }
    span {
      font-size: ${theme.font.sizes.small};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.xxsmall};
      }
    }

    b {
      font-weight: ${theme.font.weight.semiBold};
    }
  `}

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  


`;

export default GlobalStyles;
