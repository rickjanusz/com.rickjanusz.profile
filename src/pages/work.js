import React, { useEffect } from 'react'
import styled from 'styled-components'
// import Headers from '../components/Headers'
// import SEO from '../components/SEO'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GSDevTools } from 'gsap/GSDevTools'
import Headers from '../components/Headers'
import anthem from '../assets/company_anthem.jpg'
import dimg from '../assets/company_dimg.jpg'
import epsilon from '../assets/company_epsilon.jpg'
import e79 from '../assets/company_e79.jpg'
import manifest from '../assets/company_manifest.jpg'

gsap.registerPlugin(GSDevTools)
// import PageWrapper from '../styles/PageWrapperStyles'

const ExpWrapper = styled.div`
  margin-top: 0px;
  h3 {
    margin: 0 0 0px;
  }
  .ipsType_right {
    text-align: right;
  }
  .ipsType_center {
    text-align: center;
  }
  .cInnerContent {
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
  }
  .ipsSpacer_bottom_double {
    margin-bottom: 30px;
  }
  .ipsGrid {
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  .ipsGrid::before,
  .ipsGrid::after {
    display: table;
    content: '';
    line-height: 0;
  }
  .ipsGrid > [class*='ipsGrid_span'] {
    display: block;
    width: 100%;
    min-height: 30px;
    box-sizing: border-box;
  }
  .ipsGrid > .ipsGrid_span5 {
    width: 40.42553191489362%;
  }
  .ipsGrid > .ipsGrid_span6 {
    width: 48.5%;
  }
  .ipsGrid > .ipsGrid_span7 {
    width: 57.44680851063829%;
  }
  .ipsGrid > [class*='ipsGrid_span'] {
    float: left;
    margin-left: 2%;
  }
  .ipsGrid > [class*='ipsGrid_span']:first-child {
    margin-left: 0;
  }
  .feature {
    display: flex;
    align-items: center;
  }

  .heading_large {
    font-size: 1.8em;
  }
  .empty {
    height: 400px;
  }
  img {
    max-width: 100%;
  }

  .header-section {
    margin: 200px auto;
  }

  .gs_reveal {
    opacity: 0;
    visibility: hidden;
    transition: transform 0s;
  }
  .sm {
    font-size: 2rem;
  }
  .em {
    font-weight: bold;
    font-style: italic;
  }
`
const Wrapper1Col = styled.div`
  @media (max-width: 1000px) {
  }
  @media (max-width: 700px) {
  }
`

export default function WorkPage() {
  useEffect(() => {
    function animateFrom(elem, direction) {
      direction = direction | 1

      var x = 0,
        y = direction * 100
      if (elem.classList.contains('gs_reveal_fromLeft')) {
        x = -100
        y = 0
      } else if (elem.classList.contains('gs_reveal_fromRight')) {
        x = 100
        y = 0
      }
      gsap.fromTo(
        elem,
        { x: x, y: y, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: 'expo',
          overwrite: 'auto',
        }
      )
    }

    function hide(elem) {
      gsap.set(elem, { autoAlpha: 0 })
    }

    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
      hide(elem) // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFrom(elem)
        },
        onEnterBack: function () {
          animateFrom(elem, -1)
        },
        // onLeave: function () {
        //   hide(elem)
        // }, // assure that the element is hidden when scrolled into view
      })
    })

    ScrollTrigger.create({
      trigger: '#trigger1',
      start: 'top top',
      end: '+=1280',
      pin: '#pinnedContent',
    })
  }, [])

  return (
    <>
      <Headers>
        <h1>
          <span>Work History</span>
        </h1>
      </Headers>

      <ExpWrapper>
        <div className="cInnerContent" id="trigger1">
          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2019-current</div>
                <h3>Creative Director</h3>
              </div>
              <div className="gs_reveal sm em">
                Epsilon (formerly Conversant)
              </div>
              <div className="gs_reveal">
                Creative Innovation &amp; Capabilities
              </div>
              <p className="gs_reveal">
                Define, develop and lead organizational cross teams on the
                implementation of the innovation roadmap.
              </p>
            </div>

            <div
              id="pinnedContent"
              className="featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromRight"
            >
              <div className="card">
                <img width="600" src={epsilon} alt="" />
              </div>
            </div>
          </div>

          <div className="empty feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2017-2019</div>
                <h3>Assoc. Director</h3>
              </div>
              <div className="gs_reveal sm em">
                Epsilon (formerly Conversant)
              </div>
              <div className="gs_reveal">Creative Technology</div>
              <p className="gs_reveal">
                {' '}
                Built and developed Animation Presets and responsive ad unit
                methodology for implementation within our proprietary javaScript
                framework to facilitate dynamic layout of any ad size. <br />
                <span className="em">One set of code. All ad sizes.</span>
              </p>
            </div>

            {/* <div className="featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromRight">
              <div className="card">
               <img
                  width="600"
                  src="https://picsum.photos/550/550?index=4"
                  alt=""
                /> 
              </div>
            </div> */}
          </div>

          <div className="empty feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2016-2017</div>
                <h3>Sr. Manager</h3>
              </div>
              <div className="gs_reveal sm em">
                Epsilon (formerly Conversant)
              </div>
              <div className="gs_reveal">Creative Technology</div>

              <p className="gs_reveal">
                Team manager of the custom client development tech team.
                Responsible for integrating new technologies and training teams
                on new tech.
              </p>
            </div>

            {/* <div className="featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromRight">
              <div className="card">
                 <img
                  width="600"
                  src="https://picsum.photos/550/550?index=4"
                  alt=""
                /> 
              </div>
            </div> */}
          </div>

          <div className="empty feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2014-2016</div>
                <h3>Sr. Creative Tech, Team Lead</h3>
              </div>
              <div className="gs_reveal sm em">
                Epsilon (formerly Conversant)
              </div>
              <div className="gs_reveal">Creative Technology</div>

              <p className="gs_reveal">
                Team leader of all custom development of ad units. Lead
                developer on templates 1.0 for the Agency line of business. Lead
                developer in innovation exercises.
              </p>
            </div>

            {/* <div className="featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromRight">
              <div className="card">
                 <img
                  width="600"
                  src="https://picsum.photos/550/550?index=4"
                  alt=""
                /> 
              </div>
            </div> */}
          </div>
          <div id="releaseTrigger1"></div>
          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromLeft">
              <div className="card">
                <img width="600" src={manifest} alt="" />
              </div>
            </div>

            <div className="ipsGrid_span6 ipsType_left">
              <div className="heading_large gs_reveal">
                <div className="sm">2012-2014</div>
                <h3>Sr. Tech Architect</h3>
              </div>
              <div className="gs_reveal sm em">Manifest Digital</div>
              <div className="gs_reveal">Tech</div>
              <p className="gs_reveal"></p>
            </div>
          </div>

          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2012-2012</div>
                <h3>Developer</h3>
              </div>
              <div className="gs_reveal sm em">Anthem! Digital Worldwide</div>
              <div className="gs_reveal">Tech Team</div>
              <p className="gs_reveal"></p>
            </div>

            <div className="featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromRight">
              <div className="card">
                <img width="600" src={anthem} alt="" />
              </div>
            </div>
          </div>

          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromLeft">
              <div className="card">
                <img width="600" src={e79} alt="" />
              </div>
            </div>

            <div className="ipsGrid_span6 ipsType_left">
              <div className="heading_large gs_reveal">
                <div className="sm">2009-2012</div>
                <h3>Front-end Developer</h3>
              </div>
              <div className="gs_reveal sm em">Element79 of DDB</div>
              <div className="gs_reveal">Technology</div>
              <p className="gs_reveal"></p>
            </div>
          </div>

          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2008-2009</div>
                <h3>Lead Production Designer</h3>
              </div>
              <div className="gs_reveal sm em">
                Disney Interactive Media Group
              </div>
              <div className="gs_reveal">Interactive Media Group</div>
              <p className="gs_reveal"></p>
            </div>

            <div className="featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromRight">
              <div className="card">
                <img width="600" src={dimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </ExpWrapper>
    </>
  )
}
