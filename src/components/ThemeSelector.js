import React from 'react'
import styled from 'styled-components'
import {
  defaultTheme,
  sunTheme,
  snowTheme,
  overcastTheme,
  midnightTheme,
  rainTheme,
} from '../styles/Theme'

import Dflt from '../components/icons/Dflt'
import Night from '../components/icons/Night'
import Sun from '../components/icons/Sun'
import Snow from '../components/icons/Snow'
import Rain from '../components/icons/Rain'
import Overcast from '../components/icons/Overcast'

const ThemeWrapper = styled.div`
  transition: var(--transition);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  transition: all 0.25s;
  margin-top: 50px;
`
const StyledButton = styled.button`
  transition: var(--transition);
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.dark};
  transition: var(--transition);
  flex: 1;
  border: 1px solid #333;
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
`

const ThemeSelector = (props) => {
  return (
    <ThemeWrapper>
      <StyledButton
        aria-label="Default theme"
        className="condition default"
        onClick={() => props.setTheme(defaultTheme)}
      >
        <Dflt />
      </StyledButton>
      <StyledButton
        aria-label="Freezing theme"
        className="condition freezing"
        onClick={() => props.setTheme(snowTheme)}
      >
        <Snow />
      </StyledButton>
      <StyledButton
        aria-label="Hot theme"
        className="condition hot"
        onClick={() => props.setTheme(sunTheme)}
      >
        <Sun />
      </StyledButton>
      <StyledButton
        aria-label="Overcast theme"
        className="condition overcast"
        onClick={() => props.setTheme(overcastTheme)}
      >
        <Overcast />
      </StyledButton>
      <StyledButton
        aria-label="Night theme"
        className="condition midnight"
        onClick={() => props.setTheme(midnightTheme)}
      >
        <Night />
      </StyledButton>
      <StyledButton
        aria-label="Rain theme"
        className="condition rain"
        onClick={() => props.setTheme(rainTheme)}
      >
        <Rain />
      </StyledButton>
    </ThemeWrapper>
  )
}
export default ThemeSelector
