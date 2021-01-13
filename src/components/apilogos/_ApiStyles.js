import styled from 'styled-components'

const ApiStyles = styled.svg`
  fill: ${(props) => props.theme.headings};
  transition: fill 1s;
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
