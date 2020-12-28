import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const Theme = createGlobalStyle`
  :root {
    --orange: #ea6d07;
    --black: #2E2E2E;
    --white: #fff;
    --grey: #777;
  }
  html {
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--orange);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } 

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--orange) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--orange) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`

export default Theme
