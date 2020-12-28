import React, { Component } from 'react'
import WeatherStyles from '../components/styles/WeatherStyles'

class WeatherData extends Component {
  render() {
    const {
      conditionIconURL,
      conditionText,
      //humidity,
      location,
      //query,
      temp,
      //tempFeelsLike,
      time,
    } = this.props.details

    return (
      <WeatherStyles>
        <div>
          Img:
          <img src={conditionIconURL} alt={conditionText} />
        </div>
        <div>Location: {location}</div>
        <div>Temp: {temp}</div>
        <div>Time:{time}</div>
      </WeatherStyles>
    )
  }
}

export default WeatherData
