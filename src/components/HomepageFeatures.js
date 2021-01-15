import styled from 'styled-components'

import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Cloudy from '../components/Cloudy'

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
  /* text-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
  color: white;
`

export default function HomepageFeatures({ features }) {
  const feats = features[0]

  useEffect(() => {
    const innerHeight = window.innerHeight
    const bgs = [
      feats.subBanner1.asset.fluid.src,
      feats.subBanner2.asset.fluid.src,
      feats.subBanner3.asset.fluid.src,
    ]
    gsap.utils.toArray('section').forEach((section, i) => {
      section.bg = section.querySelector('.bg')
      section.bg.style.backgroundImage = `url(${bgs[i]})`

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
      } else {
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
  }, [
    feats.subBanner1.asset.fluid.src,
    feats.subBanner2.asset.fluid.src,
    feats.subBanner3.asset.fluid.src,
  ])

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
