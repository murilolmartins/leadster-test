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
      font-size: ${theme.font.sizes.xsmall};
      @media (min-width: ${theme.breakpoints.mobile_xl}) {
        font-size: ${theme.font.sizes.xxsmall};
      }
      @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: ${theme.font.sizes.xlarge};
      }
    }

    .p_small {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.bold};
      @media (min-width: ${theme.breakpoints.mobile_xl}) {
        font-size: ${theme.font.sizes.xsmall};
      }
      @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: ${theme.font.sizes.medium};
      }
    }

    .p_footer {
      font-size: ${theme.font.sizes.medium};
    }

    h1 {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.weight.normal};
      @media (min-width: ${theme.breakpoints.mobile_xl}) {
        font-size: ${theme.font.sizes.huge};
      }
      @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: ${theme.font.sizes.xxxhuge};
      }
    }

    h2 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.normal};
      @media (min-width: ${theme.breakpoints.mobile_xl}) {
        font-size: ${theme.font.sizes.xxlarge};
      }
      @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: ${theme.font.sizes.huge};
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

export { GlobalStyles };
