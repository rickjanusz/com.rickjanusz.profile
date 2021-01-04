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

// console.clear()
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 900px;
  align-items: center;
  img {
    width: 300px;
    margin-right: 40px;
    border-radius: 28px 0 28px 0;
    border-bottom: 2px solid ${(props) => props.theme.separatorTop};
    border-top: 2px solid ${(props) => props.theme.separatorBtm};

    transition: 0.3s transform;
    :hover {
      cursor: pointer;
      transform: scale(1.01);
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
  }
  @media (max-width: 1000px) {
    padding: 0 40px;
    img {
      width: 80%;
      height: auto;
    }
    p {
      font-size: 1.2em;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    align-content: center;
    img {
      width: 100%;
      height: auto;
    }
    padding: 0 50px;
    p {
      font-size: 1.1em;
    }
  }
`
//gsap.set('.ball', { xPercent: -50, yPercent: -50 })

export default function BlogPage() {
  useEffect(() => {
    // GSDevTools.create()
    //gsap.defaults({ ease: 'none' })

    gsap.core.globals('ScrollTrigger', ScrollTrigger)
    // gsap.set('.ball01', { xPercent: -50, yPercent: -50 })

    var tl = gsap.timeline({
      defaults: {
        duration: 0.1,
        autoAlpha: 1,
        scale: 1.25,
        transformOrigin: 'center',
        ease: 'elastic(2.5, 1)',
      },
    })
    // .to('.ball02, .text02', {}, 0.19)
    // .to('.ball03, .text03', {}, 0.46)
    // .to('.ball04, .text04', {}, 0.66)
    // .to('.ball05, .text05', {}, 0.9)
    // .to('.ball06, .text06', {}, 1.17)
    // .to('.ball07, .text07', {}, 1.56)
    // .to('.ball08, .text08', {}, 0.98)

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
      // .to('.ball01', { duration: 0.01, autoAlpha: 1 })
      // .to(
      //   '.ball01',
      //   { motionPath: { path: '.theLine', alignOrigin: [0.5, 0.5] } },
      //   0
      // )
      // .from('.theLine', { drawSVG: 0 }, 0)
      .add(tl, 0)
  }, [])
  return (
    <>
      <SEO title="Portfolio | RJ" />
      <TextWrapper>
        <Heading1>
          <h1>Work</h1>
        </Heading1>

        <section>
          <h1>
            2019-Current Creative, Creative Director, Capabilities &amp;
            Innovation
          </h1>
          <div>
            <h2>Covid-19: QR Code</h2>
            <h3>Challenge:</h3>
            <p>
              Answer the question faced by all business– how do we engage people
              who are less mobile?
            </p>
            <h3>Solution:</h3>
            <p>
              Develop seamless engagement opportunities by facilitating transfer
              of information to the user conveniently and intuitively through QR
              code.
            </p>
            <h3>Role:</h3>
            <p>
              2020 Capabilities Roadmap: Pinpointed QR as a critical integration
              for 2020. Lead cross-teams through solutioning, brainstorming,
              development and tests. Informing and collaborating with
              organizational teams for development of engineering, analytics,
              and product solutions. Finally, developing sales materials and
              organizational training.
            </p>

            <h2>Capabilities Paradigm</h2>
            <h3>Challenge:</h3>
            <p>
              As a walled garden and innovator within the industry- our unique
              capabilities
            </p>
            <h3>Solution:</h3>
            <p>Update parallax to animate without user engagement</p>
            <h3>Role:</h3>
            <p>
              Lead cross-teams through solutioning, brainstorming, development
              and tests. Informing and collaborating with organizational teams
              for development of engineering, analytics, and product solutions.
              Finally, developing sales materials and organizational training.
            </p>

            <h2>Partnering with Creative / Update Prototype Process</h2>
            <h3>Challenge:</h3>
            <p>
              Rehab previous creative process to include all cross teams
              including engineering, product, analytics, platform and media
            </p>
            <h3>Solution:</h3>
            <p>Develop prototype process, test, feedback, update, repeat</p>
            <h3>Role:</h3>
            <p>
              Lead Director engaging all cross teams for feedback and inclusion.
              Documenting and developing framework, testing, soliciting
              feedback, updating then repeating.
            </p>

            <h2>3D Images</h2>
            <h3>Challenge:</h3>
            <p>
              Solve for orientation data deprecation across devices- this
              effectively disabled the tilt/orientation feature on all android
              and iphone devices.
            </p>
            <h3>Solution:</h3>
            <p>Update parallax to animate without user engagement</p>
            <h3>Role:</h3>
            <p>
              Lead cross-teams through solutioning, brainstorming, development
              and tests. Informing and collaborating with organizational teams
              for development of engineering, analytics, and product solutions.
              Finally, developing sales materials and organizational training.
            </p>
          </div>
        </section>
        <section>
          <h1>2017-2019 Creative Technology, Associate Creative Director</h1>
          <div>
            <h2>Adaptive Advertising Framework</h2>
            <h2>Augmented Reality</h2>
            <h2>Animation Presets</h2>
            <div>
              <p>Presets</p>
              <p>Automation</p>
              <p>Categorical</p>
              <p>POV</p>
            </div>
            <h2>Predictive Interaction</h2>
            <h2>Video as Animation / Overlays</h2>
            <div>
              <p>Emotion</p>
              <p>Weather</p>
            </div>
          </div>
        </section>
        <section>
          <h1>2016-2017 Creative Technology Sr. Manager</h1>
          <div>
            <h2>HTML5 Hosting</h2>
            <h2>Templates 2.0</h2>
            <h2>360 Image</h2>
            <h2>Parallax 2.0 (Animation/Carousels)</h2>
            <h2>Animation Theory for Advertising</h2>
          </div>
        </section>
        <section>
          <h1>2014-2016 Creative Technology Team Lead</h1>
          <div>
            <h2>Parallax</h2>
            <h2>Templates 1.0</h2>
            <h2>Video cue points</h2>
            <h2>3P API: Weather / Maps / Social</h2>
            <h2>Sprites</h2>
          </div>
        </section>
      </TextWrapper>
    </>
  )
}
