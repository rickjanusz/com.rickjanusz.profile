// import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import React, { useEffect } from 'react'
// import { Link } from 'gatsby'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Cloudy from '../components/Cloudy'
// import SectionStyles from '../styles/SectionStyles'

gsap.registerPlugin(ScrollTrigger)

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  transition: var(--transition);
  section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-size: cover;
      background-position: center bottom;
      background-repeat: no-repeat;
    }
  }
`
const H1 = styled.h3`
  position: absolute;
  margin: 0;
  z-index: 3;
  font: bold 10vw Arial, sans-serif;
  color: white;
`
// const Video = styled.video`
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   object-fit: cover;
// `
// const SectionStyles = styled.section`
//   position: relative;
//   z-index: 1;
//   display: grid;
//   gap: 0;

//   /* place-items: center; */
//   .feature img {
//     height: 100vh;
//     width: 100vw;
//   }
// `

export default function HomepageFeatures({ features }) {
  const feats = features[0]

  // useEffect(() => {
  //   gsap.utils.toArray('.panel').forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: 'top top',
  //       pin: true,
  //       pinSpacing: false,
  //     })
  //   })

  //   ScrollTrigger.create({
  //     snap: 1 / 4, // snap whole page to the closest section!
  //   })
  // }, [])

  useEffect(() => {
    const innerHeight = window.innerHeight
    const innerWidth = window.innerWidth
    // console.log({ innerHeight, innerWidth })
    console.log(feats.subBanner1.asset.fluid.src)
    const bgs = [
      feats.subBanner1.asset.fluid.src,
      feats.subBanner2.asset.fluid.src,
      feats.subBanner3.asset.fluid.src,
    ]
    gsap.utils.toArray('section').forEach((section, i) => {
      console.log(bgs[i])

      section.bg = section.querySelector('.bg')
      // Give the backgrounds some random images
      // section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`
      section.bg.style.backgroundImage = `url(${bgs[i]})`

      // Do the parallax effect on each section
      if (i) {
        section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`

        gsap.to(section.bg, {
          backgroundPosition: `50% ${innerHeight / 2}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            scrub: true,
          },
        })
      }

      // the first image should be positioned against the top. Use px on the animating part to work with GSAP.
      else {
        section.bg.style.backgroundPosition = '50% 0px'

        gsap.to(section.bg, {
          backgroundPosition: `50% ${innerHeight / 2}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    })
  }, [])

  return (
    <Wrap className="fullWidth">
      <section className="panel panel2">
        <H1>{feats.subHL1}</H1>
        <div className="feature bg">
          {/* <Img
            fluid={feats.subBanner1.asset.fluid}
            alt={feats.subBanner1.asset.src}
          /> */}
        </div>
      </section>
      <section className="panel panel3">
        <H1>{feats.subHL2}</H1>
        <div className="feature bg">
          {/* <Img
            fluid={feats.subBanner2.asset.fluid}
            alt={feats.subBanner2.asset.src}
          /> */}
        </div>
      </section>
      <section className="panel panel4">
        <H1>{feats.subHL3}</H1>
        <div className="feature bg">
          {/* <Img
            fluid={feats.subBanner3.asset.fluid}
            alt={feats.subBanner3.asset.src}
          /> */}
        </div>
      </section>
    </Wrap>
  )
}
