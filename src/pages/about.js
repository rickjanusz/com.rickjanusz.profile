import React from 'react'
// import { Link } from 'gatsby'
import SEO from '../components/SEO'
import styled from 'styled-components'

import ClientRoster from '../components/clients/_ClientRoster'
import DarkSection from '../components/SectionDark'
import me from '../assets/me2.jpg'

import PageWrapper from '../styles/PageWrapperStyles'
import ApiLogos from '../components/apilogos/_ApiLogos'

const v = 150
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
  border: 10px solid ${(props) => props.theme.separatorTop};
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  h4 {
    margin: 0;
    padding: 20px 0;
    text-align: center;
    /* border-radius: 5px; */
    font-size: 1.5em;
    border-right: 1px solid ${(props) => props.theme.separatorTop};
    border-bottom: 1px solid ${(props) => props.theme.separatorTop};
    /* background-color: rgba(0, 0, 0, 0.7); */
    color: rgba(${v}, ${v}, ${v}, 0.5);
    color: ${(props) => props.theme.headers};
    background-color: #000;
    mix-blend-mode: multiply;
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
      border-right: 1px solid ${(props) => props.theme.separatorTop};
      border-bottom: 1px solid ${(props) => props.theme.separatorTop};
      &:last-child {
        border-bottom: none;
      }
    }
  }
  section:last-child h4 {
    border-right: none;
  }
  section:last-child li {
    border-right: none;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    section:nth-child(2) li {
      border-right: none;
    }
    section:nth-child(2) h4 {
      border-right: none;
    }
    section:nth-child(3) h4,
    section:nth-child(4) h4 {
      border-top: 1px solid ${(props) => props.theme.separatorTop};
    }
    max-width: 700px;
  }
  @media (max-width: 700px) {
    border-radius: 0;
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
  max-width: 1000px;
  align-items: top;
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
    padding: 0;
    p {
      font-size: 1.2em;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    align-content: center;
    .featured-image-container .card {
      margin-right: 0;
    }
  }
`
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

      <h2>
        <span>This Site Was Built With...</span>
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
        <span>Client Sampling...</span>
      </h2>

      <DarkSection>
        <ClientRoster />
      </DarkSection>
    </div>
  )
}
