import React, { Component } from 'react'
import styled from 'styled-components'
import 'normalize.css'
import Footer from './Footer'
import Header from './Header'
import Theme from './styles/Theme'
import formatTime from '../utils/formatTime'
import LocationData from './LocationData'
import WeatherData from './WeatherData'
import {
  WEATHER_BASE_URL,
  APP_KEY,
  UNSPLASH_KEY,
  UNSPLASH_URL,
} from '../../config'

let cityInput = React.createRef()

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`
export default class Layout extends Component {
  state = {
    headerImg: {},
    weather: {},
  }

  defaultQuery = 'Chicago'

  headerImg = {
    raw: '',
    blur_hash: '',
    download: '',
    download_location: '',
    html: '',
    self: '',
    name: '',
  }

  weather = {
    query: '',
    temp: '',
    tempFeelsLike: '',
    humidity: '',
    conditionText: '',
    conditionIconURL: '',
    location: '',
    time: '',
  }

  headerDefault = `${UNSPLASH_URL}client_id=${UNSPLASH_KEY}&query=${this.defaultQuery}`
  weatherDefault = `${WEATHER_BASE_URL}key=${APP_KEY}&q=${this.defaultQuery}`

  mountLocalStorage(dataName, apiURL, func) {
    const ref = localStorage.getItem(dataName)
    if (ref) {
      console.log('LOADING DATA', ref)
      this.setState({
        [dataName]: JSON.parse(ref),
      })
    } else {
      console.log({ func }, { apiURL })
      console.log('Running')
      func(apiURL)
    }
  }

  setWeather = (data) => {
    const weather = this.weather

    weather.temp = data.current.temp_f
    weather.tempFeelsLike = data.current.feelslike_f
    weather.humidity = data.current.humidity
    weather.conditionText = data.current.condition.text
    weather.conditionIconURL = data.current.condition.icon
    weather.time = formatTime(data.location.localtime)
    weather.location = data.location.name

    this.setState({ weather: this.weather })
  }

  setHeaderImg = (data) => {
    const imgData = this.headerImg
    const results = data.results[0]

    imgData.raw = results.urls.raw + '&crop=edges&fit=facearea&h=600&w=1500'
    imgData.blur_hash = results.blur_hash
    imgData.download = results.links.download
    imgData.download_location = results.links.download_location
    imgData.html = results.links.html
    imgData.self = results.links.self
    imgData.name = results.user.name

    this.setState({ headerImg: imgData })
  }

  componentDidMount() {
    this.mountLocalStorage(
      'headerImg',
      this.headerDefault,
      this.fetchHeaderImage
    )
    this.mountLocalStorage('weather', this.weatherDefault, this.fetchWeather)
  }

  componentDidUpdate() {
    localStorage.setItem('weather', JSON.stringify(this.state.weather))
    localStorage.setItem('headerImg', JSON.stringify(this.state.headerImg))
  }

  handleClick = async (e) => {
    e.preventDefault()
    this.weather.query = cityInput.current.value
    this.headerURL = `${UNSPLASH_URL}client_id=${UNSPLASH_KEY}&query=${this.weather.query}`
    this.weatherURL = `${WEATHER_BASE_URL}key=${APP_KEY}&q=${this.weather.query}`
    this.fetchApiData(this.headerURL, this.setHeaderImg)
    this.fetchApiData(this.weatherURL, this.setWeather)
  }

  fetchApiData = (url, setData) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }

  render() {
    return (
      <Wrapper>
        <Theme />
        <Header />
        <form onSubmit={this.handleClick}>
          <input
            type="text"
            ref={cityInput}
            id="city"
            placeholder="Enter your city"
          />
          <button type="Submit">Theme My City</button>
        </form>
        <WeatherData details={this.state.weather} />
        <LocationData details={this.state.headerImg} />
        {this.props.children}
        <Footer />
      </Wrapper>
    )
  }
}
