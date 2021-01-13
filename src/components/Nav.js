import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.div`
  margin: 0 0 5rem 0;
  padding: 0 5rem 0 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    transition: color 0.4s;
    padding: 1rem 1vw;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    color: ${(props) => props.theme.headings};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    &:before {
      content: '';
      height: 0;
      width: 100%;
      position: absolute;
      left: 0;
      z-index: -1;
      background: ${(props) => props.theme.primary};
      transform: rotate(-2deg);
      transform-origin: center;
      transition: all 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.5);
      box-shadow: 0 7px 5px -6px rgba(0, 0, 0, 0.5);
      border-radius: 5px 0 5px 0;
    }
    &:hover {
      outline: none;
      color: ${(props) => props.theme.hoverColor};
      &:before {
        height: 40%;
      }
    }
    &[aria-current],
    .current,
    .active {
      color: ${(props) => props.theme.active};
      pointer-events: none;
    }
  }
  @media (max-width: 1000px) {
    /* margin: 0; */
    border-top: 1px solid ${(props) => props.theme.headings};
    width: 100%;
    justify-content: center;
    transition: var(--transition);
    padding: 0;
    a,
    button {
      font-size: 2rem;
      &:before {
        width: 100%;
        left: 0;
      }
      &:hover {
        color: ${(props) => props.theme.dark};
        &:before {
          height: 0;
        }
      }
    }
  }

  @media (max-width: 700px) {
    a,
    button {
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
`

const Nav = () => (
  <NavStyles>
    <Link to="/about/" activeClassName="active">
      About
    </Link>
    <Link to="/work/" activeClassName="active">
      <nobr>Work History</nobr>
    </Link>
    <Link to="/projects/" activeClassName="active">
      Projects
    </Link>
    <Link to="/contact/" activeClassName="active">
      Contact
    </Link>
  </NavStyles>
)

export default Nav
