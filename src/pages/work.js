import React from 'react'
import styled from 'styled-components'
import Heading1 from '../components/Heading1'
import SEO from '../components/SEO'
import Timeline from '../components/Timeline'
import PageWrapper from '../styles/PageWrapperStyles'

// console.clear()

const Wrapper3Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const Wrapper1Col = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  h1 {
    font-size: 1.3em;
  }
  h2 {
    font-size: 1em;
  }
  p {
    font-size: 1em;
  }
  img {
    width: 300px;
    margin-right: 40px;
    border-radius: 28px 0 28px 0;
    border-bottom: 2px solid ${(props) => props.theme.separatorTop};
    border-top: 2px solid ${(props) => props.theme.separatorBtm};

    transition: all 0.3s;
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

export default function WorkPage() {
  return (
    <>
      <SEO title="Portfolio | RJ" />
      <Heading1>
        <h1>
          <span>Work</span>
        </h1>
      </Heading1>

      <PageWrapper>
        <Wrapper3Col>
          <Wrapper1Col>
            <section>
              <h1>
                2019-Current Creative, Creative Director, Capabilities &amp;
                Innovation
              </h1>
              <div>
                <h2>Partnering with Creative / Prototype Process</h2>
                <h2>QR Codes</h2>
                <h2>3D Images</h2>
                <h2>Parallax 2.0</h2>
                <h2>Ambient Video Tabbed</h2>
              </div>
            </section>
            <section>
              <h1>
                2017-2019 Creative Technology, Associate Creative Director
              </h1>
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
          </Wrapper1Col>
          <Timeline className="tl" />
          <Wrapper1Col>
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
          </Wrapper1Col>
        </Wrapper3Col>
      </PageWrapper>
    </>
  )
}
