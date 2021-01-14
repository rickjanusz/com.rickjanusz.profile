import React, { useEffect } from 'react'
import styled from 'styled-components'

import AMC from './AMC'
import AmEx from './AmEx'
import Audi from './Audi'
import BCBS from './BCBS'
import Bulls from './Bulls'
import Cabelas from './Cabelas'
import Carhartt from './Carhartt'
import Champs from './Champs'
import Chase from './Chase'
import Chevy from './Chevy'
import Cinemark from './Cinemark'
import Columbia from './Columbia'
import Crate from './Crate'
import Disney from './Disney'
// import EddieBauer from './EddieBauer'
// import Fidelity from './Fidelity'
import Gatorade from './Gatorade'
import HRBlock from './HRBlock'
import Infiniti from './Infiniti'
import Loccitane from './Loccitane'
import McDonalds from './McDonalds'
import Michelob from './Michelob'
import Nissan from './Nissan'
import Patagonia from './Patagonia'
import Pepsi from './Pepsi'
import Pixar from './Pixar'
import PotteryBarn from './PotteryBarn'
import ToysRUs from './ToysRUs'
import Ulta from './Ulta'
import VS from './VS'
import WellsFargo from './WellsFargo'
import WilliamsSonoma from './WilliamsSonoma'
// import WolfBrandChili from './WolfBrandChili'

import { gsap } from 'gsap'
import { GSDevTools } from 'gsap/GSDevTools'

// gsap.registerPlugin(GSDevTools)
// GSDevTools.create()

const LogoWrapperStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  .section {
    transition: all 1s;
    display: none;
    opacity: 0;
  }
  .active {
    transition: all 1s;
    display: block;
    opacity: 1;
  }
`

const ClientRosterStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 20px;

  @media (max-width: 1000px) {
  }
  @media (max-width: 700px) {
  }
`

export default function ClientRoster() {
  useEffect(() => {
    const els = document.querySelectorAll('.section')
    const elArr = Array.from(els)

    let n = 0

    gsap.fromTo(
      els[0],
      { autoAlpha: 0 },
      {
        duration: 0.6,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto',
      }
    )

    function nextItem() {
      if (n === 2) {
        n = 0
      } else {
        n++
      }

      function hide(elem) {
        gsap.set(elem, { autoAlpha: 0 })
      }
      gsap.utils.toArray('.section').forEach(function (elem) {
        hide(elem) // assure that the element is hidden when scrolled into view
      })

      elArr.forEach((el) => {
        el.classList.remove('active')
        gsap.fromTo(
          el,
          { autoAlpha: 0 },
          {
            duration: 0.75,
            autoAlpha: 1,
            ease: 'expo',
            overwrite: 'auto',
          }
        )
      })

      elArr[n].classList.add('active')
      // console.log(n)
    }

    const x = setInterval(nextItem, 7000)
  }, [])

  return (
    <LogoWrapperStyles>
      <div className="section active">
        <ClientRosterStyles>
          <AMC />
          <AmEx />
          <Audi />
          <BCBS />
          <Bulls />
          <Cabelas />
          <Carhartt />
          <Champs />
          <Chase />
          <Chevy />
        </ClientRosterStyles>
      </div>
      <div className="section">
        <ClientRosterStyles>
          <Cinemark />
          <Columbia />
          <Crate />
          <Disney />
          <Gatorade />
          <HRBlock />
          <Infiniti />
          <Loccitane />
          <McDonalds />
          <Michelob />
        </ClientRosterStyles>
      </div>
      <div className="section">
        <ClientRosterStyles>
          <Nissan />
          <Patagonia />
          <Pepsi />
          <Pixar />
          <PotteryBarn />
          <ToysRUs />
          <Ulta />
          <VS />
          <WellsFargo />
          <WilliamsSonoma />
        </ClientRosterStyles>
      </div>
    </LogoWrapperStyles>
  )
}
