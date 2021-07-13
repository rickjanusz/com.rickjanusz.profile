import styled from 'styled-components'

const StyledTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  transition: var(--transition);
  a {
    transition: var(--transition);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 1rem;
    padding: 10px;
    border-radius: 8px 0 8px 0;
    background-color: ${(props) => props.theme.dark};
    color: ${(props) => props.theme.light};
    align-items: center;
    .count {
      transition: var(--transition);
      border-radius: 5px 0 5px 0;
      padding: 4px;
      color: ${(props) => props.theme.dark};
      background-color: ${(props) => props.theme.light};
    }
    &.active {
      transition: var(--transition);
      background-color: ${(props) => props.theme.light};
      color: ${(props) => props.theme.dark};
    }
    &.active .count {
      transition: var(--transition);
      color: ${(props) => props.theme.light};
      background-color: ${(props) => props.theme.dark};
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }

  @media (max-width: 700px) {
  }
`

export default StyledTag
