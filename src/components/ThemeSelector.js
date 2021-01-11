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

const ThemeWrapper = styled.div`
  transition: var(--transition);
  display: flex;
  flex-wrap: wrap;
  transition: all 0.25s;
  margin-top: 50px;
`
const StyledButton = styled.button`
  transition: var(--transition);
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
  border-top: 1px solid ${(props) => props.theme.separatorTop};
  border-bottom: 1px solid ${(props) => props.theme.separatorBtm};
  font-size: 0.8em;
  padding: 15px;
  transition: all 0.25s;
  &.condition {
    transition: var(--transition);
    width: 50%;
    height: 10vh;
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
        className="condition default"
        onClick={() => props.setTheme(defaultTheme)}
      >
        D
      </StyledButton>
      <StyledButton
        className="condition freezing"
        onClick={() => props.setTheme(snowTheme)}
      >
        Frz
      </StyledButton>
      <StyledButton
        className="condition hot"
        onClick={() => props.setTheme(sunTheme)}
      >
        Hot
      </StyledButton>
      <StyledButton
        className="condition overcast"
        onClick={() => props.setTheme(overcastTheme)}
      >
        Rain
      </StyledButton>
      <StyledButton
        className="condition midnight"
        onClick={() => props.setTheme(midnightTheme)}
      >
        Drk
      </StyledButton>
      <StyledButton
        className="condition "
        onClick={() => props.setTheme(rainTheme)}
      >
        Wet
      </StyledButton>
    </ThemeWrapper>
  )
}
export default ThemeSelector
