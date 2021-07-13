import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.footer};
  transition: var(--transition);
  border-top: ${(props) => props.theme.separatorHt} solid
    ${(props) => props.theme.separatorBtm}; // SEPARATOR
  padding: 5rem 10rem;
  .wrapper {
    height: auto;
    width: 100%;
    max-width: 1000px;
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 5px;
    padding: 0 20px;
    margin: 0 auto;
    transition: var(--transition);
    display: grid;
    grid-template-columns: auto 1fr;
    box-sizing: border-box;
    font-size: 1.5rem;
  }
  @media (max-width: 1000px) {
    padding: 2rem 5rem 10rem;
    .wrapper {
      border-radius: 0px;
      top: 0;
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    padding: 2rem 0 10rem;
    p,
    ul {
    }
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div>&copy; {new Date().getFullYear()} Rick Janusz</div>
      </div>
    </StyledFooter>
  )
}
