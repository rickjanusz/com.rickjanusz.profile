import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Nav from './Nav'

const Logo = styled.div`
  font-size: 6rem;
  margin-left: 0;
  position: relative;
  z-index: 2;
  a {
    width: 6em;
    height: 2em;
    background: url('/rickjanusz.svg') no-repeat center;
    text-indent: -9999em;
    display: inline-block;
    transition: height .5s
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
    a {
    width: 5.5em;
    height: 1.8em;
    }
  @media (max-width: 700px) {
    a {
    width: 4.5em;
    height: 1.4em;
    }
  }
`
const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid var(--grey);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--grey);
  }
`

function Header() {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link to="/">Rick Janusz | Home</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar"></div>
    </StyledHeader>
  )
}

export default Header
