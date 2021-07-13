import React from 'react'
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

import StyledThemeSelector from '../styles/ThemeSelectorStyles'

const ThemeSelector = (props) => {
  return (
    <StyledThemeSelector>
      <button
        aria-label="Default theme"
        className="condition default"
        onClick={() => {
          props.setTheme(defaultTheme)
        }}
      >
        <Dflt />
      </button>
      <button
        aria-label="Freezing theme"
        className="condition freezing"
        onClick={() => props.setTheme(snowTheme)}
      >
        <Snow />
      </button>
      <button
        aria-label="Hot theme"
        className="condition hot"
        onClick={() => props.setTheme(sunTheme)}
      >
        <Sun />
      </button>
      <button
        aria-label="Overcast theme"
        className="condition overcast"
        onClick={() => props.setTheme(overcastTheme)}
      >
        <Overcast />
      </button>
      <button
        aria-label="Night theme"
        className="condition midnight"
        onClick={() => props.setTheme(midnightTheme)}
      >
        <Night />
      </button>
      <button
        aria-label="Rain theme"
        className="condition rain"
        onClick={() => props.setTheme(rainTheme)}
      >
        <Rain />
      </button>
    </StyledThemeSelector>
  )
}
export default ThemeSelector
