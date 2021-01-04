import styled from 'styled-components'

const LogoStyles = styled.svg`
  fill: ${(props) => props.theme.clientLogoColor};
  transition: fill 1s;
  display: block;
  width: 14%;
  font-size: 2rem;
  margin: 10px;
  .st0 {
    /* fill: #898989; */
    transition: fill 1s;
  }
  .st1 {
    fill: ${(props) => props.theme.darkSection};
  }
  @media (max-width: 1000px) {
    transition: width 1s;
    width: 16%;
  }
  @media (max-width: 700px) {
    transition: width 1s;
    width: 20%;
  }
`
export default LogoStyles
