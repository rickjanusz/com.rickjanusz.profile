import React from 'react'
// import { Link } from 'gatsby'

import SEO from '../components/SEO'
import ClientRoster from '../components/clients/_ClientRoster'
import DarkSection from '../components/SectionDark'
import ApiLogos from '../components/apilogos/_ApiLogos'

import PageWrapper from '../styles/PageWrapperStyles'
import { GridWrapper, TextWrapper } from '../styles/AboutStyles'

import me from '../assets/epsilon_ps.png'

export default function AboutPage() {
  //console.log(props)
  return (
    <div>
      <SEO title="About Rick Janusz" />
      <h1>
        <span>About Me</span>
      </h1>

      <PageWrapper>
        <TextWrapper>
          <div className="featured-image-container">
            <div >
              <img src={me} alt="Rick Janusz" width="300" />
            </div>
          </div>
          <section>
            <p>
              I've been a working Developer in{' '}
              <span className="city">Chicago, IL.</span> for the past{' '}
              {new Date().getFullYear() - 2003} years. My last residency was at{' '}
              <span className="em">Epsilon</span>, an advertising platform that was acquired by Publicis
              Groupe, for almost 8 years. Prior to that, I spent
              time at <span className="em">Manifest Digital</span>,{' '}
              <span className="em">Element79</span> of DDB/Omnicom,{' '}
              <span className="em">AnthemWW</span> and also{' '}
              <span className="em">Disney Interactive Media Group</span>.
            </p>

            <p>
              I currently own two companies, Bumblin Bee Candle and Redtail Market, that I started during the pandemic. Both have successfully launched and are in self sustaining mode right now, allowing me to step away and move on to something else. {' '}
            </p>

          </section>
        </TextWrapper>
      </PageWrapper>

      <h2>
        <span>This Site Is Built &amp; Maintained With</span>
      </h2>
      <DarkSection>
        <ApiLogos />
      </DarkSection>

      <h2>
        <span>Skills</span>
      </h2>
      <PageWrapper className="sub">
        <GridWrapper>
          <section>
            <h4 className="where">Tools</h4>
            <ul>
              <li>Lighthouse</li>
              <li>DevTools</li>
              <li>Confluence</li>
              <li>GIT</li>
              <li>Terminal</li>
              <li>Adobe Suite</li>
              <li>Google Business/Teams</li>
              <li>More...</li>
            </ul>
          </section>
          <section>
            <h4 className="interests">Frontend</h4>

            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES5/6+</li>
              <li>TypeScript</li>
              <li>RXjs</li>
              <li>MarkDown</li>
              <li>jQuery</li>
              <li>More...</li>
            </ul>
          </section>
          <section>
            <h4 className="">SPAs/API/FW</h4>

            <ul>
              <li>React</li>
              <li>Gatsby</li>
              <li>Next</li>
              <li>Apollo</li>
              <li>Firebase</li>
              <li>Angular</li>
              <li>NODE</li>
              <li>More...</li>
            </ul>
          </section>
          <section>
            <h4 className="">Content</h4>

            <ul>
              <li>Netlify</li>
              <li>Sanity</li>
              <li>GraphQL</li>
              <li>Prisma</li>
              <li>YOGA</li>
              <li>MongoDB Atlas</li>
              <li>Contentful</li>
              <li>More...</li>
            </ul>
          </section>
        </GridWrapper>
      </PageWrapper>

      <h2>
        <span>Client Sampling</span>
      </h2>

      <DarkSection>
        <ClientRoster />
      </DarkSection>
    </div>
  )
}
