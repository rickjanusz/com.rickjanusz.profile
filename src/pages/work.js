import React, { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import PageWrapper from '../styles/PageWrapperStyles'
import SEO from '../components/SEO'
import WorkMobile from '../components/WorkMobile'
import WorkDesktop from '../components/WorkDesktop'

const SwitchDevice = styled.div`
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
  @media (max-width: 1000px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
  @media (max-width: 700px) {
  }
`

export default function WorkPage() {
  useEffect(() => {
    function animateFrom(elem, direction) {
      direction = direction | 1

      var x = 0,
        y = direction * 500
      if (elem.classList.contains('gs_reveal_fromTop')) {
        x = 0
        y = 50
      } else if (elem.classList.contains('gs_reveal_fromBottom')) {
        x = 0
        y = -50
      }
      gsap.fromTo(
        elem,
        { x: x, y: y, autoAlpha: 0 },
        {
          duration: 2,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: 'expo',
          overwrite: 'auto',
        }
      )
    }

    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFrom(elem)
        },
        onEnterBack: function () {
          animateFrom(elem, -1)
        },
      })
    })
    ScrollTrigger.create({
      trigger: '#trigger1',
      //start: window.innerHeight / 2 - 100,
      end: '+=1880',
      pin: '#pinnedContent',
    })
  }, [])

  return (
    <>
      <SEO title="Work History" />
      <h1>
        <span>Work History</span>
      </h1>
      <PageWrapper>
        <SwitchDevice>
          <div className="desktop">
            <WorkDesktop />
          </div>
          <div className="mobile">
            <WorkMobile />
          </div>
        </SwitchDevice>
      </PageWrapper>
    </>
  )
}
