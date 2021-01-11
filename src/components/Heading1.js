import styled from 'styled-components'

const w = '50vw'
const s = '10px'
const Heading1 = styled.header`
  h1 {
    font-family: Arial, sans-serif;
    margin: 50px auto;
    color: ${(props) => props.theme.dark};
    text-align: center;
    font-size: 2.3em;
    position: relative;
    z-index: 20;
    transition: var(--transition);
    position: relative;
    top: -80px;
  }
  h1:after {
    content: '';
    display: block;
    width: ${w};
    height: 5px;
    transition: var(--transition);
    background: ${(props) => props.theme.primary};
    border-bottom: 1px solid ${(props) => props.theme.separatorBtm};
    right: 0;
    top: 50%;
    z-index: -1;
    position: absolute;
  }

  h1:before {
    content: '';
    display: block;
    width: ${w};
    height: 5px;
    transition: var(--transition);
    background: ${(props) => props.theme.primary};
    border-bottom: 1px solid ${(props) => props.theme.separatorBtm};
    left: 0;
    top: 50%;
    z-index: -1;
    position: absolute;
  }
  h1 span {
    background-color: #ccc;
    padding: 0.2em;
    border: 5px solid ${(props) => props.theme.primary};
    border-radius: 20px 0 20px 0;
    transition: var(--transition);
  }
  @media (max-width: 1000px) {
    font-size: 1.5rem;
    h1 {
      top: -72px;
    }
  }
  @media (max-width: 700px) {
    font-size: 1.3rem;
    h1:after {
      width: 50vw;
      right: 0%;
    }
    h1:before {
      width: 50vw;
      left: 0%;
    }
  }
`

export default Heading1
