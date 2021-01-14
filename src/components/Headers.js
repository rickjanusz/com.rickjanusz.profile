import styled from 'styled-components'

const w = '50vw'
const s = '10px'
const Heading1 = styled.header`
  /*h1:after,
  h2:after {
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

  h1:before,
  h2:before {
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
  h1 span,
  h2 span {
    background-color: #ccc;
    padding: 0.2em;
    border: 5px solid ${(props) => props.theme.primary};
    border-radius: 20px 0 20px 0;
    transition: var(--transition);
  }

   */

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    font-size: 1.3rem;
  }
`

export default Heading1
