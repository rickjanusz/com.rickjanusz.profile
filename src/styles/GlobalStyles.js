import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight:normal;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.bodyText};
    background: ${(props) => props.theme.backgroundColor};
    transition: background-color 1s;
  }

  p, ul {
    font-size: 2rem;
    line-height: 1.6;
  }
  .gatsby-image-wrapper img[src*='base64\\,'] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }


 
`
export default GlobalStyles
