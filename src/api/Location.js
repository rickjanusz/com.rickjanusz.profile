import React from 'react'
import styled from 'styled-components'
import dev from '../assets/hero_rick.jpg'

const HeaderStyles = styled.h1`
  /* font-size: 6vw; */
  color: white;
  /* padding: 0 0 0 200px; */
  @media (max-width: 1000px) {
    /* font-size: 7vw; */
  }

  @media (max-width: 700px) {
    /* font-size: 5vw; */
  }
`
const LocationStyles = styled.div`
  border-top: 1px solid ${(props) => props.theme.separatorBtm};
  border-bottom: 1px solid ${(props) => props.theme.separatorTop};
  background-color: ${(props) => props.theme.separatorTop}; // SEPARATOR
  /* background-image: url(${dev}); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-position-y: bottom; */
  position: relative;
  display: grid;
  /* height: 60vh; */
  overflow: hidden;
  grid-template-columns: 1fr;
  place-items: center;
  transition: var(--transition);
  /* text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7); */
  @media (max-width: 1000px) {
    /* height: 50vh; */
    /* min-height: 400px; */
  }

  @media (max-width: 700px) {
    /* height: 30vh; */
    /* min-height: 300px; */
  }
`

export default function Location({ props }) {
  //console.log('Props', props)
  // const header = props.data.homepage.nodes[0]
  // console.log(header)
  //const img = data.file.childImageSharp.fixed
  // console.log(data)
  // set height of hero based on location
  // let loc = props.path
  // let imgHeight = '100vh'
  // let imgHeight1k = '35vh'
  // let imgHeight700 = '20vh'
  // // console.log(loc)
  // if (loc !== '/') {
  //   imgHeight = '50vh'
  //   imgHeight1k = '35vh'
  //   imgHeight700 = '20vh'
  // }

  // const { blur_hash, raw, links, user } = this.props.details
  // const { raw } = props.details

  return (
    <>
      <LocationStyles props={props}>
        <HeaderStyles className="hero panel">
          {/* <nobr>
            &lt;
            <br />
            Creative Technologist <br />
            /&gt;
          </nobr> */}
        </HeaderStyles>
      </LocationStyles>
    </>
  )
}
