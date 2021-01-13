import styled from 'styled-components'

const IconStyles = styled.svg`
  fill: ${(props) => props.theme.light};
  transition: var(--transition);
  display: block;
  width: 50px;
  margin: 3px auto;
  .st0 {
    transition: var(--transition);
  }
  .st1 {
    fill: ${(props) => props.theme.darkSection};
  }
  @media (max-width: 1000px) {
    transition: var(--transition);
    /* width: 18%; */
  }
  @media (max-width: 700px) {
    transition: var(--transition);
    /* width: 30%; */
  }
`
export default IconStyles
