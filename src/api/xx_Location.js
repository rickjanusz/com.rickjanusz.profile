import React from 'react'
import styled from 'styled-components'
import dev from '../assets/hero_rick.jpg'

const HeaderStyles = styled.h1`
  color: white;
  @media (max-width: 1000px) {
  }
  @media (max-width: 700px) {
  }
`
const LocationStyles = styled.div`
  border-top: 1px solid ${(props) => props.theme.separatorBtm};
  border-bottom: 1px solid ${(props) => props.theme.separatorTop};
  background-color: ${(props) => props.theme.white};
  transition: var(--transition);
  @media (max-width: 1000px) {
  }
  @media (max-width: 700px) {
  }
`

export default function Location({ props }) {
  return (
    <>
      {/* <LocationStyles props={props}>
        <HeaderStyles className="hero"></HeaderStyles>
      </LocationStyles> */}
    </>
  )
}
