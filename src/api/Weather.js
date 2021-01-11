import React, { Component } from 'react'
import styled from 'styled-components'

const WeatherWrapper = styled.div`
  height: 60vh;
  width: 100vw;
  position: fixed;
  right: 0px;
  overflow: hidden;
  transition: var(--transition);
  z-index: 1000;
  pointer-events: none;
  @media (max-width: 1000px) {
  }
  @media (max-width: 700px) {
  }
`

const WeatherStyles = styled.div`
  margin: 0;
  width: 300px;
  height: 100vh;
  position: absolute;
  right: -300px;
  pointer-events: auto;
  /* right: 0px; */
  z-index: 2;
  font-size: 2rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.transparentBar};
  transition: var(--transition);
  &.active {
    right: 0;
  }
  .handle {
    height: 50px;
    width: 50px;
    text-align: center;
    position: absolute;
    z-index: 3;
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.primary};
    left: -50px;
    transition: var(--transition);
  }

  img {
    width: 4vw;
  }
  form {
    border: 1px solid red;
    background-color: blue;
    input {
      padding: 10px;
      width: 100%;
      border: none;
      border-right: 1px solid ${(props) => props.theme.separatorTop};
      border-radius: 3px 0 0 3px;
      :focus,
      :active {
        outline: none;
        border: none;
      }
    }
    button {
      padding: 10px 20px;
      border: none;
      width: 100%;
      border-left: 1px solid ${(props) => props.theme.separatorBtm};
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      transition: var(--transition);
      :hover {
        background-color: ${(props) => props.theme.headings};
        cursor: pointer;
      }
    }
  }
  .cityDetails {
    position: absolute;
    /* right: 20px; */
    top: 300px;
  }
  .weatherForm {
    position: absolute;
    top: 400px;
  }
  .themeSelector {
    top: 0px;
    position: absolute;
  }
  @media (max-width: 1000px) {
    margin: 0;
    width: 100vw;
    right: -100vw;
    /* right: 0vw; */
    &.active {
      .handle {
        left: 0px;
        width: 100%;
      }
    }
  }
  @media (max-width: 700px) {
  }
`

class Weather extends Component {
  constructor(props) {
    super(props)
    // this.addActiveClass = this.addActiveClass.bind(this)
    // this.state = {
    //   active: false,
    // }
  }

  state = {
    active: false,
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

    return (
      <WeatherWrapper>
        <WeatherStyles className={this.state.active && 'active'}>
          <div
            className="handle"
            onClick={() => this.setState({ active: !this.state.active })}
          >
            X
          </div>
          <div className="cityDetails">
            <img src={conditionIconURL} alt={conditionText} />
            <div>Location: {location}</div>
            <div>Temp: {temp}</div>
            {/* <div>Humidity: {humidity}</div> */}
          </div>
          {this.props.children}
        </WeatherStyles>
      </WeatherWrapper>
    )
  }
}

export default Weather
