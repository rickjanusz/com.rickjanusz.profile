import styled from 'styled-components'

const ApiStyles = styled.svg`
  max-width: 100px;
  fill: ${(props) => props.theme.headings};
  transition: fill 1s;
  &#titleSvg {
    max-width: 450px;
  }
  .st0 {
    /* fill: #898989; */
    transition: fill 1s;
  }
  @media (max-width: 1000px) {
    transition: width 1s;
  }
  @media (max-width: 700px) {
    transition: width 1s;
  }
`
export default ApiStyles
