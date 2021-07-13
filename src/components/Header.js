import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import StyledHeader from '../styles/HeaderStyles'

export default function Header(props) {
  return (
    <>
      <StyledHeader>
        <div className="bar">
          <Logo />
          <Nav />
        </div>
        {props.children}
      </StyledHeader>
    </>
  )
}
