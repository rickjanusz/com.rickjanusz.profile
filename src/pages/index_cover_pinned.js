import React, { useEffect, useRef } from 'react'
// import { Link } from 'gatsby'
import SEO from '../components/SEO'
// import { textIntro } from '../components/Animate'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cloudy from '../components/Cloudy'

import SectionStyles from '../styles/SectionStyles'
gsap.registerPlugin(ScrollTrigger)

export default function HomePage(props) {
  let section1 = useRef(null)
  let section2 = useRef(null)
  let section3 = useRef(null)
  let section4 = useRef(null)

  console.log(section1.current)
  useEffect(() => {
    gsap.utils.toArray('.panel').forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      })
    })

    ScrollTrigger.create({
      snap: 1 / 4, // snap whole page to the closest section!
    })
  }, [])

  return (
    <div>
      <SEO title="Front End Developer" />
      <Cloudy className="cloudy"></Cloudy>
      <SectionStyles
        className="panel parallax panel2"
        data-depth="0.6"
        ref={section2}
      >
        <div className="bg"></div>
        <h1>Innovator</h1>
      </SectionStyles>
      <SectionStyles
        className="panel parallax panel3"
        data-depth="0.8"
        ref={section3}
      >
        <div className="bg"></div>
        <h1>Automator</h1>
      </SectionStyles>
      <SectionStyles
        className="panel parallax panel4"
        data-depth="1.0"
        ref={section4}
      >
        <div className="bg"></div>
        <h1>Developer</h1>
      </SectionStyles>
    </div>
  )
}
