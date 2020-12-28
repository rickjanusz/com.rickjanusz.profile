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
  UNSPLASH_URL,
  UNSPLASH_KEY,
} from '../../config'

let cityInput = React.createRef()

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`
export default class Layout extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    headerImg: {},
    weather: {},
  }

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

  componentDidMount() {
    // this.headerURL = `${UNSPLASH_URL}client_id=${UNSPLASH_KEY}&query=${this.weather.query}`
    this.fetchHeaderImage(
      `https://api.unsplash.com/search/photos/?client_id=${UNSPLASH_KEY}&query=${this.weather.query}`
    )
    // Header
    const headerRef = localStorage.getItem('headerImg')
    if (headerRef) {
      this.setState({
        headerImg: JSON.parse(headerRef),
      })
    } else {
      this.weather.query = 'Chicago'
      this.headerURL = `https://api.unsplash.com/search/photos/?client_id=${UNSPLASH_KEY}&query=${this.weather.query}`
      this.fetchHeaderImage(this.headerURL)
    }

    // Weather
    const weatherRef = localStorage.getItem('weather')
    if (weatherRef) {
      this.setState({
        weather: JSON.parse(weatherRef),
      })
    } else {
      this.weather.query = 'Chicago'
      this.weatherURL = `${WEATHER_BASE_URL}key=${APP_KEY}&q=${this.weather.query}`

      this.fetchWeather(this.weatherURL)
    }
  }

  componentDidUpdate() {
    // Weather
    // console.log('It Updated!')
    // console.log(this.state.weather)
    localStorage.setItem('weather', JSON.stringify(this.state.weather))
    localStorage.setItem('headerImg', JSON.stringify(this.state.headerImg))
  }

  handleClick = async (e) => {
    e.preventDefault()

    this.weather.query = cityInput.current.value
    this.headerURL = `https://api.unsplash.com/search/photos/?client_id=${UNSPLASH_KEY}&query=${this.weather.query}`
    this.weatherURL = `${WEATHER_BASE_URL}key=${APP_KEY}&q=${this.weather.query}`
    this.fetchHeaderImage(this.headerURL)
    this.fetchWeather(this.weatherURL)
  }

  fetchWeather(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.weather.temp = data.current.temp_f
        this.weather.tempFeelsLike = data.current.feelslike_f
        this.weather.humidity = data.current.humidity
        this.weather.conditionText = data.current.condition.text
        this.weather.conditionIconURL = data.current.condition.icon
        this.weather.time = formatTime(data.location.localtime)
        this.weather.location = data.location.name

        this.setState({ weather: this.weather })
      })
  }

  /// ******************************************* UNSPLASH API / HEADER IMAGE
  // testing var until location integration
  tempImgQuery = 'snow'

  fetchHeaderImage(url) {
    //`https://api.unsplash.com/search/photos/?client_id=${UNSPLASH_KEY}&query=${this.query}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const imgData = this.headerImg
        const results = data.results[0]
        console.log(results)
        imgData.raw = results.urls.raw + '&crop=edges&fit=facearea&h=600&w=1500'
        imgData.blur_hash = results.blur_hash
        imgData.download = results.links.download
        imgData.download_location = results.links.download_location
        imgData.html = results.links.html
        imgData.self = results.links.self
        imgData.name = results.user.name

        this.setState({
          headerImg: imgData,
        })
      })
      .catch((err) => {
        console.log('ERROR: ', err)
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
