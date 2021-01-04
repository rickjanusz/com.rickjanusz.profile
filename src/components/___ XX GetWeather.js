import React, { Component, setState } from 'react'
import WeatherData from './Weather'
import { BASE_URL, APP_KEY } from '../../config'

// import dotenv from 'dotenv'
// dotenv.config({ path: '../../.env' })

let cityInput = React.createRef()

class GetWeather extends Component {
  // state = {
  //   weather: {},
  // }

  // weather = {
  //   hasQueried: false,
  //   query: '',
  //   temp: '',
  //   tempFeelsLike: '',
  //   humidity: '',
  //   conditionText: '',
  //   conditionIconURL: '',
  //   location: '',
  //   time: '',
  // }
  // //TODO: get .env file working
  // //ERROR: Module not found: Error: Can't resolve 'fs' in '/Users/rjanusz/Sites/com.rickjanusz/frontend/node_modules/dotenv/lib'
  // // BASE_URL = process.env.BASE_URL
  // // APP_KEY = process.env.APP_KEY

  // weatherURL = ''

  // fetchWeather = (url) => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.weather.temp = data.current.temp_f
  //       this.weather.tempFeelsLike = data.current.feelslike_f
  //       this.weather.humidity = data.current.humidity
  //       this.weather.conditionText = data.current.condition.text
  //       this.weather.conditionIconURL = data.current.condition.icon
  //       this.weather.time = formatTime(data.location.localtime)
  //       this.weather.location = data.location.name

  //       this.setState({ weather: this.weather })
  //     })
  // }

  // handleClick = async (e) => {
  //   e.preventDefault()

  //   this.weather.query = cityInput.current.value
  //   this.weatherURL = `${BASE_URL}key=${APP_KEY}&q=${this.weather.query}`

  //   this.fetchWeather(this.weatherURL)
  // }

  // componentDidMount() {
  //   const localStorageRef = localStorage.getItem('weather')
  //   if (localStorageRef) {
  //     this.setState({
  //       weather: JSON.parse(localStorageRef),
  //     })
  //   } else {
  //     this.weather.query = 'Chicago'
  //     this.weatherURL = `${BASE_URL}key=${APP_KEY}&q=${this.weather.query}`

  //     this.fetchWeather(this.weatherURL)
  //   }
  // }

  // componentDidUpdate() {
  //   // console.log('It Updated!')
  //   // console.log(this.state.weather)
  //   localStorage.setItem('weather', JSON.stringify(this.state.weather))
  // }

  render() {
    return <></>
  }
}

export default GetWeather
