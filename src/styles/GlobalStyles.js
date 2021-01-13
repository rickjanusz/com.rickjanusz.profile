import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --transition: all .6s ease-in-out;
  }

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
  a {
    text-decoration: none;
    transition: var(--transition);
    color: ${(props) => props.theme.dark};
  }

  .card {
    margin-bottom: 10px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 1px 1px 5px 1px #cccccc;
    transition: 0.3s;
  }

  .featured-image-container .card {
    padding: 10px;
    height: 0;
    padding-bottom: calc(100% - 10px);
  }


 
`
export default GlobalStyles
