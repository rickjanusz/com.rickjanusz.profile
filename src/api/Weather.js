import React, { Component } from 'react'
import styled from 'styled-components'

const WeatherStyles = styled.div`
  margin: 0;
  width: 100%;
  position: absolute;
  z-index: 2;
  font-size: 2rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.transparentBar};
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(20, 1fr);
  align-items: center;
  justify-items: center;
  transition: color 1s;
  img {
    width: 4vw;
  }
  form {
    font-size: 0.8em;
    input {
      padding: 10px;
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
      border-left: 1px solid ${(props) => props.theme.separatorBtm};
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      border-radius: 0 3px 3px 0;
      transition: background-color 0.25s;
      :hover {
        background-color: ${(props) => props.theme.headings};
        cursor: pointer;
      }
    }
  }
  .cityDetails {
    grid-column: span 10;
    /* background: yellow; */
    order: 1;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
  }
  .weatherForm {
    grid-column: span 10;
    /* background: yellow; */
    order: 2;
  }
  .themeSelector {
    /* background: yellow; */
    grid-column: 1/-1;
    order: 3;
  }
  @media (max-width: 1000px) {
    margin: 0;
    width: 100%;
    justify-content: center;
  }
  @media (max-width: 700px) {
  }
`

class Weather extends Component {
  render(props) {
    const {
      conditionIconURL,
      conditionText,
      humidity,
      location,
      //query,
      temp,
      //tempFeelsLike,
      //time,
    } = this.props.details

    return (
      <>
        <WeatherStyles>
          <div className="cityDetails">
            <img src={conditionIconURL} alt={conditionText} />
            <div>Location: {location}</div>
            <div>Temp: {temp}</div>
            {/* <div>Humidity: {humidity}</div> */}
          </div>
          {this.props.children}
        </WeatherStyles>
      </>
    )
  }
}

export default Weather
