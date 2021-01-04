import React, { useEffect } from 'react'
import styled from 'styled-components'
import Heading1 from '../components/Heading1'
import SEO from '../components/SEO'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { GSDevTools } from 'gsap/GSDevTools'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin, GSDevTools)
// import TimelineSVG from '../assets/timeline.svg'
// import InnovatorImg from '../assets/brainstorm2_1.jpg'

const TimelineSVG = styled.svg`
  .theLine {
    stroke: ${(props) => props.theme.headings};
  }
  circle {
    fill: ${(props) => props.theme.headings};
  }
  .ball,
  .text {
    visibility: hidden;
  }
  #svg,
  #Layer_2 {
    overflow: visible;
  }
`

console.clear()

//gsap.set('.ball', { xPercent: -50, yPercent: -50 })

export default function Timeline() {
  useEffect(() => {
    // GSDevTools.create()
    //gsap.defaults({ ease: 'none' })

    gsap.core.globals('ScrollTrigger', ScrollTrigger)
    gsap.set('.ball01', { xPercent: -50, yPercent: -50 })

    var tl = gsap
      .timeline({
        defaults: {
          duration: 0.1,
          autoAlpha: 1,
          scale: 1.25,
          transformOrigin: 'center',
          ease: 'elastic(2.5, 1)',
        },
      })
      .to('.ball02, .text02', {}, 0.19)
      .to('.ball03, .text03', {}, 0.46)
      .to('.ball04, .text04', {}, 0.66)
      .to('.ball05, .text05', {}, 0.9)
      .to('.ball06, .text06', {}, 1.17)
      .to('.ball07, .text07', {}, 1.56)
      .to('.ball08, .text08', {}, 0.98)

    var action = gsap
      .timeline({
        defaults: { duration: 2.5 },

        scrollTrigger: {
          scrub: true,
          trigger: '.theLine',
          start: 'top center',
          end: 'bottom bottom',
          endTrigger: '#footer',
        },
        scaleY: 0,
        transformOrigin: 'top, top',
        ease: 'none',
      })
      .to('.ball01', { duration: 0.01, autoAlpha: 1 })
      .to(
        '.ball01',
        { motionPath: { path: '.theLine', alignOrigin: [0.5, 0.5] } },
        0
      )
      .from('.theLine', { drawSVG: 0 }, 0)
      .add(tl, 0)
  }, [])
  return (
    <>
      <SEO title="Portfolio | RJ" />
      <Heading1>
        <h1>Work</h1>
      </Heading1>
      <TimelineSVG viewBox="0 0 1669 3871.8" id="svg">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="theLine"
              id="path"
              d="M727.5,68.3c42.5,230.5,395,174.6,402.5,541.5,8,391-515.9,60.5-487,532,20,326-162.4,196.7-165,533-2,254,277,307,206,533-79.9,254.3,122.9,222.3,64,533-53.5,282.5,210,351,325,532,124,195.2-180.6,381.1-45.5,559.5"
              fill="none"
              stroke-miterlimit="10"
              stroke-width="10"
            />
            <line
              className="tlline tlline2"
              id="line2020"
              y1="609.6"
              x2="1669"
              y2="609.6"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="11.6"
            />
            <line
              className="tlline tlline3"
              id="line2019"
              y1="1142.3"
              x2="1669"
              y2="1142.3"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="8.75"
            />
            <line
              className="tlline tlline4"
              id="line2018"
              y1="1675"
              x2="1669"
              y2="1675"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="7.55"
            />
            <line
              className="tlline tlline5"
              id="line2017"
              y1="2207.7"
              x2="1669"
              y2="2207.7"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="9.03"
            />
            <line
              className="tlline tlline6"
              id="line2016"
              y1="2740.4"
              x2="1669"
              y2="2740.4"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="9.41"
            />
            <line
              className="tlline tlline7"
              id="line2015"
              y1="3273.1"
              x2="1669"
              y2="3273.1"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="11.31"
            />
            <line
              className="tlline tlline8"
              id="line2014"
              x1="1.5"
              y1="3830.3"
              x2="1669"
              y2="3830.3"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="11.04"
            />{' '}
            <circle
              className="ball ball01"
              id="ball2021"
              cx="52.5"
              cy="72.3"
              r="47.5"
            />
            <circle
              className="ball ball02"
              id="ball2020"
              cx="1124.5"
              cy="607.3"
              r="47.5"
            />
            <circle
              className="ball ball03"
              id="ball2019"
              cx="643"
              cy="1142.3"
              r="47.5"
            />
            <circle
              className="ball ball04"
              id="ball2018"
              cx="473.5"
              cy="1675.3"
              r="47.5"
            />
            <circle
              className="ball ball05"
              id="ball2017"
              cx="684.5"
              cy="2207.3"
              r="47.5"
            />
            <circle
              className="ball ball06"
              id="ball2016"
              cx="747.5"
              cy="2740.3"
              r="47.5"
            />
            <circle
              className="ball ball07"
              id="ball2015"
              cx="1073.5"
              cy="3272.3"
              r="47.5"
            />
            <circle
              className="ball ball08"
              id="ball2014"
              cx="1024.5"
              cy="3824.3"
              r="47.5"
            />
            <text
              className="text text01"
              transform="translate(100 51)"
              font-size="22"
              font-weight="900"
              font-family="Arial, Helvetica, sans-serif"
            >
              2021
            </text>
            <text
              className="text text02"
              transform="translate(1100 615)"
              font-size="22"
              font-weight="900"
              font-family="Arial, Helvetica, sans-serif"
            >
              2020
            </text>
            <text
              className="text text03"
              transform="translate(620 1150)"
              font-size="22"
              font-weight="900"
              font-family="Arial, Helvetica, sans-serif"
            >
              2019
            </text>
            <text
              className="text text04"
              transform="translate(450 1680)"
              font-size="22"
              font-weight="900"
              font-family="Arial, Helvetica, sans-serif"
            >
              2018
            </text>
            <text
              className="text text05"
              transform="translate(660 2213)"
              font-size="22"
              font-weight="900"
              font-family="Arial, Helvetica, sans-serif"
            >
              2017
            </text>
            <text
              className="text text06"
              transform="translate(726 2747)"
              font-size="22"
              font-weight="900"
              font-family="Arial, Helvetica, sans-serif"
            >
              2016
            </text>
            <text
              className="text text07"
              transform="translate(1050 3278)"
              font-size="22"
              font-weight="900"
              font-family="Arial, Helvetica, sans-serif"
            >
              2015
            </text>
            <text
              className="text text08"
              transform="translate(217.8 3802.5)"
              font-size="22"
              font-weight="900"
              font-family="Arial, Helvetica, sans-serif"
            >
              2014
            </text>
            <line
              className="tlline tlline1"
              id="line2021"
              y1="76.8"
              x2="1669"
              y2="76.8"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="9.35"
            />
          </g>
        </g>
      </TimelineSVG>
    </>
  )
}
