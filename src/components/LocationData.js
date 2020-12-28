import React, { Component } from 'react'
import LocationStyles from '../components/styles/LocationStyles'

class LocationData extends Component {
  render() {
    const { blur_hash, raw, links, user } = this.props.details

    console.log('DEETS', this.props.details)
    return (
      <LocationStyles>
        <p>Location Data!</p>
        <div>
          Img:
          <img src={raw} />
        </div>
        {/* <div>Location: {location}</div>
        <div>Temp: {temp}</div>
        <div>Time:{time}</div> */}
      </LocationStyles>
    )
  }
}

export default LocationData
