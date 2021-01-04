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

const StyledButton = styled.button`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
  box-shadow: none;
  border: none;
  border-left: 1px solid ${(props) => props.theme.separatorTop};
  border-right: 1px solid ${(props) => props.theme.separatorBtm};
  font-size: 0.8em;
  min-width: 100px;
  padding: 15px 30px;
  margin: 10px 0;
  transition: background-color 0.25s;
  :hover {
    background-color: ${(props) => props.theme.headings};
    cursor: pointer;
  }
  :focus,
  :active {
    outline: none;
  }
  :first-child {
    border-radius: 5px 0 0 5px;
  }
  :last-child {
    border-radius: 0 5px 5px 0;
  }
`

const ThemeSelector = (props) => {
  return (
    <div className="themeSelector">
      <StyledButton onClick={() => props.setTheme(defaultTheme)}>
        Default
      </StyledButton>
      <StyledButton onClick={() => props.setTheme(snowTheme)}>
        Frozen
      </StyledButton>
      <StyledButton onClick={() => props.setTheme(sunTheme)}>
        Toasty
      </StyledButton>
      <StyledButton onClick={() => props.setTheme(overcastTheme)}>
        Gloomy
      </StyledButton>
      <StyledButton onClick={() => props.setTheme(midnightTheme)}>
        Vamp
      </StyledButton>
      <StyledButton onClick={() => props.setTheme(rainTheme)}>Wet</StyledButton>
    </div>
  )
}
export default ThemeSelector
