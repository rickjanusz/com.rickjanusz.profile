import React, { Component } from 'react'
import styled from 'styled-components'
import dev from '../assets/developer.jpg'

const HeaderStyles = styled.h1`
  font-size: 7vw;
  color: white;
  padding: 0;
  @media (max-width: 1000px) {
    font-size: 6vw;
  }

  @media (max-width: 700px) {
    font-size: 5vw;
  }
`

class Location extends Component {
  render(props) {
    //console.log('Props', this.props)
    //const img = data.file.childImageSharp.fixed
    // console.log(data)
    // set height of hero based on location
    let loc = this.props.props.location.pathname
    let imgHeight = '100vh'
    let imgHeight1k = '35vh'
    let imgHeight700 = '20vh'
    // console.log(loc)
    if (loc !== '/') {
      imgHeight = '50vh'
      imgHeight1k = '35vh'
      imgHeight700 = '20vh'
    }

    // const { blur_hash, raw, links, user } = this.props.details
    const LocationStyles = styled.div`
      border-top: 1px solid ${(props) => props.theme.separatorBtm};
      border-bottom: 1px solid ${(props) => props.theme.separatorTop};
      background-color: ${(props) => props.theme.separatorTop}; // SEPARATOR
      background-image: url(${dev});
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      display: grid;
      height: ${imgHeight};
      grid-template-columns: 1fr;
      place-items: center;
      transition: height 1s;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
      @media (max-width: 1000px) {
        height: ${imgHeight1k};
        min-height: 400px;
      }

      @media (max-width: 700px) {
        height: ${imgHeight700};
        min-height: 300px;
      }
    `

    return (
      <>
        <LocationStyles>
          <HeaderStyles className="hero">
            {/* <nobr>
              &lt;
              <br />
              Creative <br />
              Technologist <br />
              /&gt;
            </nobr> */}
          </HeaderStyles>
        </LocationStyles>
      </>
    )
  }
}

export default Location
