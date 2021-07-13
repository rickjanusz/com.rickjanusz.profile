import React from 'react'
import StyledFooter from '../styles/FooterStyles'

export default function Footer() {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div>&copy; {new Date().getFullYear()} Rick Janusz</div>
      </div>
    </StyledFooter>
  )
}
