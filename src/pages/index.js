import React, { useEffect, useRef } from 'react'
import SEO from '../components/SEO'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Cloudy from '../components/Cloudy'
import SectionStyles from '../styles/SectionStyles'
import AutomatorVid from '../assets/automator.mp4'
import InnovatorImg from '../assets/brainstorm2_1.jpg'

import styled from 'styled-components'

const H1 = styled.h3`
  z-index: 2;
  font: bold 10vw Arial, sans-serif;
  background-color: rgba(0, 0, 0, 0.7);
  color: rgba(50, 50, 50, 0.5);
  mix-blend-mode: overlay;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`
const Video = styled.video`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`

gsap.registerPlugin(ScrollTrigger)

export default function HomePage(props) {
  // let innerHeight = window.innerHeight
  // let innerWidth = window.innerWidth
  //console.log(innerHeight, innerWidth)
  // let section1 = useRef(null)
  let section2 = useRef(null)
  let section3 = useRef(null)
  let section4 = useRef(null)

  // console.log(section1.current)
  useEffect(() => {
    // const el = document.querySelector('.vid')
    // el.play()

    gsap.utils.toArray('.panel').forEach((section, i) => {
      section.bg = section.querySelector('.bg')

      // Give the backgrounds some random images
      // section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`
      section.bg.style.backgroundImage = `url(${InnovatorImg})`
    })
    gsap.utils.toArray('.panel').forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      })
    })
  }, [])

  return (
    <div>
      <SEO title="Front End Developer" />
      {/* <Cloudy className="cloudy"></Cloudy> */}
      <SectionStyles
        className="panel parallax panel2"
        data-depth="0.6"
        ref={section2}
      >
        <div className="bg"></div>
        <H1>Innovator</H1>
      </SectionStyles>
      <SectionStyles
        className="panel parallax panel3"
        data-depth="0.8"
        ref={section3}
      >
        <H1>Automator</H1>
        <Video muted playsinline loop autoplay className="vid bg">
          <source src={AutomatorVid} type="video/mp4" />
        </Video>
        <div className="bg"></div>
      </SectionStyles>
      <SectionStyles
        className="panel parallax panel4"
        data-depth="1.0"
        ref={section4}
      >
        <div className="bg"></div>
        <H1>Developer</H1>
      </SectionStyles>
    </div>
  )
}
