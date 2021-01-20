import React, { Component } from 'react'
import styled from 'styled-components'
import WeatherIcon from '../components/icons/Dflt'

const Wrap = styled.div`
  .handle {
    width: 100%;
    height: 40px;
    cursor: pointer;
    background-color: ${(props) => props.theme.dark};
    transition: var(--transition);
    &:hover {
      background-color: ${(props) => props.theme.light};
      svg {
        fill: ${(props) => props.theme.dark};
      }
    }
    svg {
      height: 100%;
      width: 40px;
      fill: ${(props) => props.theme.light};
    }
  }
`
const WeatherWrapper = styled.div`
  height: auto;
  width: 100vw;
  right: 0px;
  transition: var(--transition);
  z-index: 1000;
  pointer-events: none;
  position: fixed;
  @media (max-width: 1000px) {
  }
  @media (max-width: 700px) {
  }
`

const WeatherStyles = styled.div`
  margin: 0;
  width: 100vw;
  height: 0vh;
  pointer-events: auto;
  /* display: flex; */
  z-index: 2;
  font-size: 2rem;
  overflow: hidden;
  /* position: relative; */
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.dark};
  transition: var(--transition);
  &.active {
    height: 100vh;
  }
  img {
    width: 4vw;
  }
  form {
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
    /* display: flex; */
    /* flex-direction: row; */
    text-align: center;
    img {
      height: 75px;
      width: 75px;
    }
  }
  @media (max-width: 1000px) {
    margin: 0;
    width: 100vw;
    right: -100vw;
  }
  @media (max-width: 700px) {
  }
`

class Weather extends Component {
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
      <Wrap>
        <div
          className="handle"
          onClick={() => this.setState({ active: !this.state.active })}
        >
          <WeatherIcon />
        </div>
        <WeatherWrapper>
          <WeatherStyles className={this.state.active && 'active'}>
            <div className="cityDetails">
              <img
                className="cityChild"
                src={conditionIconURL}
                alt={conditionText}
              />
              <div className="cityChild">Location: {location}</div>
              <div className="cityChild">Temp: {temp}</div>
              {/* <div>Humidity: {humidity}</div> */}
            </div>
            {this.props.children}
          </WeatherStyles>
        </WeatherWrapper>
      </Wrap>
    )
  }
}

export default Weather
