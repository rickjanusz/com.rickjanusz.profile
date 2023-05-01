import React, { Component, useEffect } from 'react'
import StyledWeather from '../styles/WeatherStyles'
// import WeatherIcon from '../components/icons/Dflt'

class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render(props) {
    const {
      conditionIconURL,
      conditionText,
      // humidity,
      location,
      //query,
      temp,
      //tempFeelsLike,
      //time,
    } = this.props.details
    const active = this.props.active

    return (
      <StyledWeather>
        <div
          className="handle"
          onClick={() => {
            this.toggleClass()
          }}
        >
          <div className="condition">
          </div>
        </div>
        <div className="weatherWrapper">
          <div id="weatherSelector" className={this.state.active && 'active'}>
            <div className="cityDetails">
            
            </div>
            {this.props.children}
          </div>
        </div>
      </StyledWeather>
    )
  }
}

export default Weather
