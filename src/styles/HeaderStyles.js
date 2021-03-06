import styled from 'styled-components'

const StyledHeader = styled.header`
  .bar {
    border-bottom: 1px solid ${(props) => props.theme.separatorTop};
    transition: var(--transition);
    display: grid;
    grid-template-columns: auto 1fr;
    transition: var(--transition);
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
      justify-content: center;
      transition: var(--transition);
    }
  }
`

export default StyledHeader
