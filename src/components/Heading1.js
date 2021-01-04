import styled from 'styled-components'

const w = '25vw'

const Heading1 = styled.header`
  h1 {
    font-family: Arial, sans-serif;
    margin: 50px auto;
    color: ${(props) => props.theme.primary};
    text-align: center;
    font-size: 3em;
    position: relative;
    z-index: 20;
    transition: font-size 0.5s;
  }
  h1:after {
    content: '';
    display: block;
    width: ${w};
    height: 5px;
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
    background: ${(props) => props.theme.primary};
    border-bottom: 1px solid ${(props) => props.theme.separatorBtm};
    left: 0;
    top: 50%;
    z-index: -1;
    position: absolute;
  }
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    font-size: 1.3rem;
    h1:after {
      width: 20vw;
      right: 0%;
    }
    h1:before {
      width: 20vw;
      left: 0%;
    }
  }
`

export default Heading1
