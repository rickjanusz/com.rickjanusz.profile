import styled from 'styled-components'

const StyledThemeSelector = styled.div`
  transition: var(--transition);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  transition: all 0.25s;
  button {
    transition: var(--transition);
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.dark};
    transition: var(--transition);
    flex: 1;
    border: 1px solid ${(props) => props.theme.headings};
    &.condition {
      transition: var(--transition);
      /* height: 10vh; */
    }
    :hover {
      transition: var(--transition);
      background-color: ${(props) => props.theme.headings};
      cursor: pointer;
    }
    :focus,
    :active {
      transition: var(--transition);
      outline: none;
    }
  }
`
export default StyledThemeSelector
