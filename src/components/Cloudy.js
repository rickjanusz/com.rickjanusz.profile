import React from 'react'
import styled from 'styled-components'

export const weatherStyles = styled.div`
  background: ${(props) => props.theme.contentBgColor};

  //needed to show effects for "cloud" ^^
  overflow: visible;
  position: absolute;
  z-index: 0;
  left: -70px;
  //mix-blend-mode: multiply;
`

const CloudStyles = styled.svg`
  position: absolute;
  z-index: 0;
  left: -320px;
  top: -320px;
  //mix-blend-mode: multiply;
  filter: url(#svgFilter);
  overflow: visible;
  background: #000;
  border: 1px solid #fff;
  box-shadow: 500px 500px 50px 0px hsla(210, 30%, 70%, 1);
`

export default class Cloudy extends React.Component {
  render() {
    let clouds = {
      cloud1: {
        width: '390',
        height: '275',
        viewbox: '0 0 390 275',
        path:
          'M379.8,121.9a81.1,81.1,0,0,0-81-81.1,78.3,78.3,0,0,0-20.7,2.7,42,42,0,0,0-51-15.9,81.1,81.1,0,0,0-134,18.3A58.1,58.1,0,0,0,49.5,84,60.2,60.2,0,0,0,0,143H0a60.2,60.2,0,0,0,52.7,59.5A81.6,81.6,0,0,0,188.4,240a81.6,81.6,0,0,0,109-37.1h3.2a58,58,0,0,0,10.3-.9A81.1,81.1,0,0,0,379.8,121.9Z',
      },
      cloud2: {
        width: '379.8',
        height: '263.1',
        viewbox: '0 0 379.8 263.1',
        path:
          'M456.9,102.5a52.9,52.9,0,0,0-47.6-30.1,57,57,0,0,0-12.5,1.5,68.6,68.6,0,0,0-56.9-30.2,84.9,84.9,0,0,0-8.8.5,81.7,81.7,0,0,0-142-5.6h-1.6a81.8,81.8,0,0,0-62,28.4,57,57,0,0,0-23-4.7,58.3,58.3,0,0,0-55.9,41.6A60.8,60.8,0,0,0,0,162.6H0A60.6,60.6,0,0,0,60.4,223H450.9a60.6,60.6,0,0,0,60.4-60.4h0A60.7,60.7,0,0,0,456.9,102.5Z',
      },
      cloud3: {
        width: '379.8',
        height: '263.1',
        viewbox: '0 0 379.8 263.1',
        path:
          'M405.7,91.1a46.8,46.8,0,0,0-42.3-26.8,44.2,44.2,0,0,0-11,1.4,60.8,60.8,0,0,0-50.6-26.9,68.1,68.1,0,0,0-7.8.5,72.6,72.6,0,0,0-126.1-5.1h-1.4A73.1,73.1,0,0,0,110,61,52,52,0,0,0,51.3,90.9,53.7,53.7,0,0,0,0,144.4H0a53.7,53.7,0,0,0,48,53.3,85.5,85.5,0,0,0,112.3,45,106.3,106.3,0,0,0,157.9-8.5,73.2,73.2,0,0,0,22.6,3.5,75.3,75.3,0,0,0,66.6-40.1A53.9,53.9,0,0,0,454,144.4h0A53.8,53.8,0,0,0,405.7,91.1Z',
      },
    }
    let path = clouds.cloud1.path
    let width = clouds.cloud1.width
    let height = clouds.cloud1.height
    let viewbox = clouds.cloud1.viewbox

    let fill = 'hsla(210, 30%, 70%, 1)'
    // drop-shadow
    // let floodColor = '#8fb6c8'
    // let floodX = 3 // offsetX
    // let floodY = 3 // offsetY
    // let floodBlur = 120 // blur
    return (
      <CloudStyles
        className="cloudy"
        width={width}
        height={height}
        viewBox={viewbox}
      >
        <g className="cloud" id="cloud" data-name="cloud" fill={fill}>
          <path d={path} />
        </g>
        <filter id="svgFilter" width="350%" height="350%" x="-100%" y="-100%">
          <feTurbulence
            type="fractalNoise"
            numOctaves="10"
            baseFrequency=".01"
          />
          <feDisplacementMap in="SourceGraphic" scale="180" />
          {/* <feDropShadow
            dx={floodX}
            dy={floodY}
            stdDeviation={floodBlur}
            flood-color={floodColor}
          /> */}
        </filter>
      </CloudStyles>
    )
  }
}
