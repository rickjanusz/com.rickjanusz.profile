import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const LogoStyles = styled.svg`
  fill: ${(props) => props.theme.primary};
  transition: var(--transition);
  display: block;
  width: 25em;
  margin-left: 0.8em;
  font-size: 2rem;
  .rj {
    fill: ${(props) => props.theme.headings};
    transition: var(--transition);
  }
  @media (min-width: 1001px) {
    transition: var(--transition);
  }
  @media (max-width: 1000px) {
    transition: var(--transition);
    width: 20em;
    display: block;
    margin: 0 auto;
    position: relative;
  }
  @media (max-width: 700px) {
    transition: var(--transition);
    width: 15em;
  }
`
function Logo() {
  return (
    <Link to="/" aria-label="Go to rickjanusz.com homepage">
      <LogoStyles viewBox="290 50 600 200">
        <g>
          <path
            className="rj"
            d="M310.5,130.7c-1.8,1.1-3.3,2.5-4.3,4.3c-1,1.8-1.5,3.9-1.5,6.1v24h10.5v-20.9c0-1.7,0.3-3,0.9-4.1c0.6-1,1.7-1.5,3.4-1.5
		h16.2v-9.6h-19.1C314.3,129.1,312.3,129.6,310.5,130.7z"
          />
          <rect className="rj" x="340" y="129.2" width="10.5" height="36" />
          <path
            className="rj"
            d="M394,130.4c-1.8-0.8-3.5-1.2-5.4-1.2h-22.4c-1.8,0-3.6,0.4-5.4,1.2c-1.8,0.8-3.2,2-4.3,3.6c-1.1,1.6-1.7,3.3-1.8,5.4v13.8
		c0,2.3,0.6,4.3,1.7,6.1c1.1,1.8,2.5,3.3,4.2,4.3c1.8,1.1,3.8,1.6,6,1.6h21.4c2.3,0,4.3-0.5,6-1.6c1.8-1.1,3.2-2.5,4.2-4.3
		c1.1-1.8,1.6-3.9,1.7-6.1V150h-10.5c0,1.6-0.3,3-0.9,4c-0.6,1.1-1.7,1.6-3.4,1.6h-15.6c-1.7,0-2.8-0.5-3.4-1.6
		c-0.6-1.1-0.9-2.4-0.9-4v-5.1c0-1.9,0.2-3.3,0.8-4.4c0.6-1.1,1.7-1.6,3.2-1.6h16.2c1.4,0,2.4,0.4,3,1.3c0.6,0.9,0.9,2.1,1,3.7h10.5
		v-4.4c0-2-0.6-3.8-1.8-5.4C397.2,132.5,395.8,131.3,394,130.4z"
          />
          <path
            className="rj"
            d="M448.1,147.9c-1.1-1.8-2.5-3.3-4.2-4.3c-1.8-1.1-3.8-1.6-6-1.6h-6.1l11.2-12.9H431L419.8,142v9.6h15.1
		c1.7,0,2.8,0.5,3.4,1.5c0.6,1,0.9,2.4,0.9,4.1v7.9h10.5v-11.1C449.7,151.8,449.1,149.8,448.1,147.9z"
          />
          <rect className="rj" x="404.4" y="129.2" width="10.5" height="36" />
        </g>
        <path
          className="st0"
          d="M515.7,194.2H545h9.2c14.6,0,26.4-11.8,26.4-26.4v-6.6v-44.1V90.6h-26.4l0.2,26.2v13v21.7v3.2
	c0,7.2-5.8,13-13,13h-4.5h-21.2V194.2z M515.7,167.9v26.2H546 M515.7,167.9v26.2H545 M503.4,167.9v-13v-19.2v-5.8
	c0-7.2,5.8-13,13-13h1.4h23.9V90.6h-35.3h-2.9c-14.6,0-26.4,11.8-26.4,26.4v11.7v38.9V194h26.4L503.4,167.9z"
        />
        <g>
          <path
            className="rj"
            d="M620,129.2h10.5v24.4c0,2.3-0.5,4.3-1.5,6.1c-1,1.8-2.5,3.3-4.3,4.3c-1.8,1.1-3.9,1.6-6.1,1.6h-13.3V156h10.4
		c1.7,0,2.8-0.5,3.4-1.5c0.6-1,0.9-2.4,0.9-4.1V129.2z"
          />
          <path
            className="rj"
            d="M680.2,129.2v36h-10.5v-26.4h-20.2c-2.8,0-4.1,1.8-4,5.3v5.9c0,1.6,0.3,3,0.9,4c0.6,1.1,1.7,1.6,3.4,1.6h15.1v9.6h-18
		c-2.3,0-4.3-0.5-6-1.6c-1.8-1.1-3.2-2.5-4.2-4.3c-1.1-1.8-1.6-3.9-1.7-6.1v-13.8c0-2,0.6-3.8,1.8-5.4c1.1-1.6,2.6-2.7,4.3-3.6
		c1.8-0.8,3.5-1.2,5.4-1.2H680.2z"
          />
          <path
            className="rj"
            d="M684.5,165.2v-36H695v36H684.5z M718.4,140.3c-0.6-1-1.7-1.5-3.4-1.5h-21.1v-9.6h24c2.3,0,4.3,0.5,6,1.6
		c1.8,1.1,3.2,2.5,4.2,4.3c1.1,1.8,1.6,3.9,1.7,6.1v24h-10.5v-20.8C719.2,142.7,718.9,141.3,718.4,140.3z"
          />
          <path
            className="rj"
            d="M779.4,129.2v24c0,2.3-0.6,4.3-1.7,6.1c-1.1,1.8-2.5,3.3-4.2,4.3c-1.8,1.1-3.8,1.6-6,1.6H746c-2.3,0-4.3-0.5-6-1.6
		c-1.8-1.1-3.2-2.5-4.2-4.3c-1.1-1.8-1.6-3.9-1.7-6.1v-24h10.5V150c0,1.6,0.3,3,0.9,4c0.6,1.1,1.7,1.6,3.4,1.6h15.6
		c1.7,0,2.8-0.5,3.4-1.6c0.6-1.1,0.9-2.4,0.9-4v-20.8H779.4z"
          />
          <path
            className="rj"
            d="M823.5,144.3c1.8,1.1,3.2,2.4,4.2,4.2c0.9,1.7,1.4,3.6,1.4,5.5c0,1.9-0.5,3.7-1.4,5.4c-0.9,1.7-2.3,3.1-4.1,4.1
		c-1.8,1.1-4,1.6-6.6,1.6h-33.2v-9.6h30.3c1.3,0,2.4-0.2,3.1-0.6c0.7-0.4,1.1-0.9,1.1-1.5s-0.4-1.1-1.2-1.5
		c-0.8-0.4-1.8-0.6-3.2-0.6h-18.2c-2.6,0-4.8-0.5-6.6-1.6c-1.8-1.1-3.2-2.4-4.1-4.1c-0.9-1.7-1.4-3.5-1.4-5.4c0-1.9,0.5-3.7,1.4-5.5
		c0.9-1.7,2.3-3.1,4.2-4.2c1.8-1.1,4.1-1.6,6.7-1.6h30.5v9.6h-27.6c-1.3,0-2.4,0.2-3.2,0.6s-1.2,0.9-1.2,1.5c0,0.5,0.4,1,1.1,1.4
		c0.7,0.4,1.8,0.6,3.1,0.6h18.2C819.5,142.8,821.7,143.3,823.5,144.3z"
          />
          <path
            className="rj"
            d="M850,154.6h27.3v10.5h-45.6v-11.4l25.6-14h-23v-10.6h43v10.6L850,154.6z"
          />
        </g>
      </LogoStyles>
    </Link>
  )
}

export default Logo
