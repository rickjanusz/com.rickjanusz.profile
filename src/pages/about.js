import React from 'react'
// import { Link } from 'gatsby'
import SEO from '../components/SEO'
import styled from 'styled-components'

import Headers from '../components/Headers'
import ClientRoster from '../components/clients/_ClientRoster'
import DarkSection from '../components/SectionDark'
import me from '../assets/me2.jpg'

import PageWrapper from '../styles/PageWrapperStyles'

const v = 150
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.separatorTop};
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: var(--transition);
  section {
    border-left: 1px solid ${(props) => props.theme.separatorTop};
    border-right: 1px solid ${(props) => props.theme.separatorBtm};
  }
  section > div > div {
    background: ${(props) => props.theme.primary};
  }

  h4 {
    margin: 0;
    padding: 40px 15px 15px;
    border-radius: 5px;
    font-size: 1.5em;
    background-color: rgba(0, 0, 0, 0.7);
    color: rgba(${v}, ${v}, ${v}, 0.5);
    color: ${(props) => props.theme.headers};
    background-color: ${(props) => props.theme.primary};
    mix-blend-mode: multiply;
    border-bottom: 1px solid ${(props) => props.theme.separatorBtm};
    text-shadow: 1px 1px 1px #fff;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    transition: var(--transition);
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      margin: 0;
      padding: 15px 0 15px 20px;
      border-top: 1px solid ${(props) => props.theme.separatorTop};
      border-bottom: 1px solid ${(props) => props.theme.separatorBtm};
    }
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    max-width: 700px;
  }
  @media (max-width: 700px) {
    /* grid-template-columns: 1fr; */
    ul,
    li {
      font-size: 2rem;
    }
  }
`
const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 900px;
  align-items: center;
  gap: 20px;
  .em {
    font-weight: 900;
  }

  .card {
    margin-bottom: 10px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 1px 1px 5px 1px #cccccc;
    transition: 0.3s;
  }

  .featured-image-container .card {
    padding: 10px;
    height: 0;
    padding-bottom: calc(100%);
    overflow: hidden;
    margin-right: 10px;
  }

  img {
    transition: var(--transition);
    width: 100%;
  }
  @media (max-width: 1000px) {
    padding: 0 40px;
    /* img {
      width: 80%;
      height: auto;
    } */
    p {
      font-size: 1.2em;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    align-content: center;
    /* img {
      width: 100%;
      height: auto;
    } */
    padding: 0 50px;
  }
`
export default function AboutPage() {
  //console.log(props)
  return (
    <>
      <SEO title="About Rick Janusz" />
      <Headers>
        <h1>
          <span>About Me</span>
        </h1>
      </Headers>

      <PageWrapper>
        <TextWrapper>
          <div className="featured-image-container">
            <div className="card">
              <img src={me} alt="Rick Janusz" width="300" />
            </div>
          </div>
          <section>
            <p>
              I'm a {new Date().getFullYear() - 2003} year veteran developer
              working in Chicago, IL. I've been at{' '}
              <span className="em">Epsilon</span>, formerly Conversant, formerly
              Dotomi for {new Date().getFullYear() - 2014} years. Prior to that,
              I spent time at <span className="em">Manifest Digital</span>,{' '}
              <span className="em">Element79</span> of DDB/Omnicom,{' '}
              <span className="em">AnthemWW</span> and also{' '}
              <span className="em">Disney Interactive Media Group</span>.
            </p>
            <p>
              I'm currently a <span className="em">Creative Director</span> with
              a focus on <span className="em">Tech</span>,{' '}
              <span className="em">Innovation</span>
              and <span className="em">Creative Capabilities</span>. I lead
              cross organizational teams in developing and implementing new ad
              tech. The space I work in is highly personalized online media
              which delivers billions of ad impressions daily.{' '}
              <span className="em">
                I only work in ES6 javascript, all day, everyday.
              </span>
            </p>
          </section>
        </TextWrapper>
      </PageWrapper>

      <Headers className="sub">
        <h2>
          <span>About This Site</span>
        </h2>
      </Headers>
      <DarkSection>
        <ul>
          <li>Its the JAMstack</li>
          <li>Its the Gatsburger</li>
          <li>Its the Netlify</li>
          <li>Its the Sanity</li>
          <li>Its the PWA</li>
          <li>Lighthouse results - link to</li>
        </ul>
      </DarkSection>

      <Headers>
        <h2>
          <span>Skills</span>
        </h2>
      </Headers>
      <PageWrapper className="sub">
        <GridWrapper>
          <section>
            <div>
              <div>
                <h4 className="where">Tools</h4>
              </div>
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
            </div>
          </section>
          <section>
            <div>
              <div>
                <h4 className="interests">Frontend</h4>
              </div>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript ES5/6+</li>
                <li>TypeScript</li>
                <li>RXjs</li>
                <li>MarkDown</li>
                <li>jQuery</li>
                <li>Too many to list...</li>
              </ul>
            </div>
          </section>
          <section>
            <div>
              <div>
                <h4 className="">SPAs/API/FW</h4>
              </div>
              <ul>
                <li>React</li>
                <li>Apollo</li>
                <li>Angular</li>
                <li>Gatsby</li>
                <li>Next</li>
                <li>NODE</li>
                <li>Firebase</li>
                <li>Again- the list goes on...</li>
              </ul>
            </div>
          </section>
          <section>
            <div>
              <div>
                <h4 className="">Content</h4>
              </div>
              <ul>
                <li>Netlify</li>
                <li>Contentful</li>
                <li>Sanity</li>
                <li>GraphQL</li>
                <li>YOGA</li>
                <li>Prisma</li>
                <li>MongoDB Atlas</li>
                <li>Et al...</li>
              </ul>
            </div>
          </section>
        </GridWrapper>
      </PageWrapper>

      <Headers>
        <h2>
          <span>Client History</span>
        </h2>
      </Headers>

      <DarkSection>
        <ClientRoster />
      </DarkSection>
    </>
  )
}
