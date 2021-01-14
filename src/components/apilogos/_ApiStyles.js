import styled from 'styled-components'

const ApiStyles = styled.svg`
  max-width: 100px;
  margin: 20px 50px;
  min-width: 75px;
  fill: ${(props) => props.theme.headings};
  transition: fill 1s;
  &#titleSvg {
    max-width: 550px;
    min-width: 300px;
    margin: 0;
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
