import React, { useEffect } from 'react'
import styled from 'styled-components'

import Gatsby from './Gatsby'
import GraphQl from './GraphQl'
import ReactLogo from './ReactLogo'
import Netlify from './Netlify'
import Sanity from './Sanity'
import JamStack from './JamStack'

import PageWrapper from '../../styles/PageWrapperStyles'

const ApiStyles = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: space-around;
  svg {
    flex: 1;
  }
`

export default function ApiLogos() {
  return (
    <PageWrapper>
      <JamStack />
      <ApiStyles>
        <ReactLogo />
        <Gatsby />
        <GraphQl />
        <Sanity />
        <Netlify />
      </ApiStyles>
    </PageWrapper>
  )
}
