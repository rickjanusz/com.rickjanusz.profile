import React, { Component } from 'react'
import { UNSPLASH_KEY, UNSPLASH_SECRET } from '../../config'
import LocationData from './LocationData'

export default class GetLocation extends Component {
  // query = 'cloudy'
  // img = ''
  // imgs = []
  // state = {
  //   imgData: {},
  // }

  // imgData = {
  //   raw: '',
  //   blur_hash: '',
  //   links: {
  //     download: '',
  //     download_location: '',
  //     html: '',
  //     self: '',
  //   },
  //   user: {
  //     name: '',
  //   },
  // }
  // componentDidMount() {
  //   fetch(
  //     `https://api.unsplash.com/search/photos/?client_id=${UNSPLASH_KEY}&query=${this.query}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(this.state.weather)
  //       const imgData = this.imgData
  //       const results = data.results[0]
  //       imgData.raw =
  //         results.urls.raw + '&crop=edges&fit=facearea&h=600&w=1500&sepia=50'
  //       imgData.blur_hash = results.blur_hash
  //       imgData.links.download = results.links.download
  //       imgData.links.download_location = results.links.download_location
  //       imgData.links.html = results.links.html
  //       imgData.links.self = results.links.self
  //       imgData.user.name = results.user.name

  //       this.setState({
  //         imgData: this.imgData,
  //       })
  //     })
  // }

  render() {
    return (
      <div>
        <LocationData details={this.state.imgData} />
      </div>
    )
  }
}
