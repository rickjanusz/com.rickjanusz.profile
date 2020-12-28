import React from 'react'
import { Link } from 'gatsby'
import NavStyles from './styles/NavStyles'

const Nav = () => (
  <NavStyles>
    <Link to="/about">About</Link>
    <Link to="/work">Work</Link>
    <Link to="/contact">Contact</Link>
  </NavStyles>
)

export default Nav
