import React from 'react'
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

const ClientRosterStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 50px 20px;
  @media (max-width: 1000px) {
  }
  @media (max-width: 700px) {
  }
`

const ClientRoster = () => {
  return (
    <ClientRosterStyles>
      <AMC className="item" />
      <AmEx className="item" />
      <Audi className="item" />
      <BCBS className="item" />
      <Bulls className="item" />
      <Cabelas className="item" />
      <Carhartt className="item" />
      <Champs className="item" />
      <Chase className="item" />
      <Chevy className="item" />
      <Cinemark className="item" />
      <Columbia className="item" />
      <Crate className="item" />
      <Disney className="item" />
      {/* <EddieBauer className="item" /> */}
      {/* <Fidelity className="item" /> */}
      <Gatorade className="item" />
      <HRBlock className="item" />
      <Infiniti className="item" />
      <Loccitane className="item" />
      <McDonalds className="item" />
      <Michelob className="item" />
      <Nissan className="item" />
      <Patagonia className="item" />
      <Pepsi className="item" />
      <Pixar className="item" />
      <PotteryBarn className="item" />
      <ToysRUs className="item" />
      <Ulta className="item" />
      <VS className="item" />
      <WellsFargo className="item" />
      <WilliamsSonoma className="item" />
      {/* <WolfBrandChili className="item" /> */}
    </ClientRosterStyles>
  )
}

export default ClientRoster
