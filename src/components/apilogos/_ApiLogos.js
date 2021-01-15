import React from 'react'
import styled from 'styled-components'

import Gatsby from './Gatsby'
import GraphQl from './GraphQl'
import ReactLogo from './ReactLogo'
import Netlify from './Netlify'
import Sanity from './Sanity'
import JamStack from './JamStack'

import PageWrapper from '../../styles/PageWrapperStyles'

const ApiStyles = styled.div`
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  place-items: center;
  align-items: stretch;
  svg {
    flex: 1;
    min-width: 100px;
  }
`

export default function ApiLogos() {
  return (
    <PageWrapper>
      <ApiStyles>
        <JamStack />
      </ApiStyles>
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
