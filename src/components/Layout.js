import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import Footer from './Footer'
import Header from './Header'
import Weather from '../api/Weather'
import GlobalStyle from '../styles/GlobalStyles'
import ContentWrapperStyles from '../styles/ContentWrapperStyles'
import ThemeSelector from './ThemeSelector'
import {
  defaultTheme,
  sunTheme,
  snowTheme,
  overcastTheme,
  midnightTheme,
  rainTheme,
} from '../styles/Theme'
import { WEATHER_URL, UNSPLASH_URL } from '../../config'

let cityInput = React.createRef()

export default class Layout extends Component {
  defaultQuery = 'Chicago'

  state = {
    headerImg: {},
    weather: {},
    theme: {},
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

  headerDefault = `${UNSPLASH_URL}client_id=${process.env.UNSPLASH_KEY}&query=${this.defaultQuery}`
  weatherDefault = `${WEATHER_URL}key=${process.env.WEATHER_APP_KEY}&q=${this.defaultQuery}`

  mountLocalStorage(dataName, apiURL, setData) {
    const ref = localStorage.getItem(dataName)
    if (ref) {
      this.setState({
        [dataName]: JSON.parse(ref),
      })
    } else {
      this.fetchApiData(apiURL, setData)
    }
  }

  setWeather = (data) => {
    const weather = this.weather

    //console.log(this.current)
    weather.temp = data.current.temp_f
    weather.tempFeelsLike = data.current.feelslike_f
    weather.humidity = data.current.humidity
    weather.time = data.location.localtime
    weather.conditionText = data.current.condition.text
    weather.conditionIconURL = data.current.condition.icon
    weather.location = data.location.name

    this.setState({ weather: this.weather })
    const { temp, conditionText, time } = this.weather
    console.log(['Temp: ', temp], ['Time:', time])
    const localtime = time.split(' ')
    const hourMins = localtime[1].split(':')
    const hour = hourMins[0]
    let timeofday = 'day'
    if (hour > 17 || hour < 7) {
      timeofday = 'night'
    }

    // console.log(timeofday)
    var condition = conditionText.toLowerCase()
    // console.log('Condition:', condition)
    if (!condition.includes('sunny')) {
      // console.log('SNOW CONDITION: ', condition)
      if (
        condition.includes('mist') ||
        condition.includes('snow') ||
        condition.includes('freezing') ||
        condition.includes('ice') ||
        condition.includes('sleet') ||
        condition.includes('blizzard')
      ) {
        // console.log('CONDITION: ', condition)
        this.setTheme(snowTheme)
      } else if (
        condition.includes('fog') ||
        condition.includes('overcast') ||
        (condition.includes('cloudy') && !condition.includes('partly'))
      ) {
        // console.log('OVERCAST: ', condition)
        this.setTheme(overcastTheme)
      } else if (condition.includes('rain')) {
        this.setTheme(rainTheme)
      } else if (condition.includes('clear')) {
        this.setTheme(midnightTheme)
      } else if (condition.includes('partly cloudy')) {
        if (timeofday === 'day') {
          this.setTheme(sunTheme)
        } else {
          this.setTheme(midnightTheme)
        }
      }
    } else if (temp > 35 && !condition.includes('sunny')) {
      if (
        condition.includes('mist') ||
        condition.includes('rain') ||
        (condition.includes('drizzle') && !condition.includes('freezing'))
      ) {
        console.log('CONDITION: ', condition)
        this.setTheme(rainTheme)
      } else if (condition.includes('fog') || condition.includes('overcast')) {
        console.log('OVERCAST: ', condition)
        this.setTheme(overcastTheme)
      } else if (condition.includes('clear')) {
        this.setTheme(midnightTheme)
      } else if (condition.includes('partly cloudy')) {
        if (timeofday === 'day') {
          this.setTheme(sunTheme)
        } else {
          this.setTheme(midnightTheme)
        }
      }
      // console.log('CONDITION OUT: ', weather.conditionText)
    } else if (
      condition.includes('sunny') ||
      condition.includes('partly cloudy')
    ) {
      // console.log('SUNNY: ', condition)
      this.setTheme(sunTheme)

      // console.log('CONDITION OUT: ', weather.conditionText)
    } else if (
      condition.includes('fog') ||
      condition.includes('overcast') ||
      (condition.includes('cloudy') && !condition.includes('partly'))
    ) {
      // console.log('OVERCAST: ', condition)
      this.setTheme(overcastTheme)

      // console.log('CONDITION OUT: ', weather.conditionText)
    } else {
      this.setTheme(defaultTheme)
    }
  }

  setHeaderImg = (data) => {
    const imgData = this.headerImg
    const results = data.results[0]

    imgData.raw =
      results.urls.raw +
      '&crop=edges&fit=facearea&h=600&w=1500&orientation=landscape'
    imgData.blur_hash = results.blur_hash
    imgData.download = results.links.download
    imgData.download_location = results.links.download_location
    imgData.html = results.links.html
    imgData.self = results.links.self
    imgData.name = results.user.name

    this.setState({ headerImg: imgData })
  }

  componentDidMount() {
    // console.log('UPDATING')

    this.mountLocalStorage('theme')
    this.mountLocalStorage('headerImg', this.headerDefault, this.setHeaderImg)
    this.mountLocalStorage('weather', this.weatherDefault, this.setWeather)
  }

  componentDidUpdate() {
    // console.log('UPDATING')

    localStorage.setItem('theme', JSON.stringify(this.state.theme))
    localStorage.setItem('weather', JSON.stringify(this.state.weather))
    localStorage.setItem('headerImg', JSON.stringify(this.state.headerImg))
  }

  handleClick = async (e) => {
    e.preventDefault()
    this.weather.query = cityInput.current.value
    this.headerURL = `${UNSPLASH_URL}client_id=${process.env.UNSPLASH_KEY}&query=${this.weather.query}`
    this.weatherURL = `${WEATHER_URL}key=${process.env.WEATHER_APP_KEY}&q=${this.weather.query}`
    this.fetchApiData(this.headerURL, this.setHeaderImg)
    this.fetchApiData(this.weatherURL, this.setWeather)
  }

  fetchApiData = (url, setData) => {
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        // console.log(data)
      })
      .catch((err) => {
        console.log(err)
        // alert('That sure is a far out place man, try something a little closer')
      })
  }

  setTheme = (theme) => {
    this.setState({ theme }, () => {
      // console.log(this.state.theme)
    })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <Header>
          <Weather details={this.state.weather}>
            <ThemeSelector setTheme={this.setTheme} />
            <form className="weatherForm" onSubmit={this.handleClick}>
              <input
                type="text"
                ref={cityInput}
                id="city"
                placeholder="Enter a City Name"
              />
              <button type="Submit">Theme my Site by City Weather</button>
            </form>
          </Weather>
        </Header>
        {/* <Location details={this.state.headerImg} props={this.props} /> */}
        <ContentWrapperStyles>{this.props.children}</ContentWrapperStyles>
        <Footer />
      </ThemeProvider>
    )
  }
}
