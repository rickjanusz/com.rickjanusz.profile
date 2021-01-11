import React from 'react'
// import { Link } from 'gatsby'
import SEO from '../components/SEO'
import styled from 'styled-components'

import Heading1 from '../components/Heading1'
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
  transition: max-width 0.5s;
  section {
    border-left: 1px solid ${(props) => props.theme.separatorTop};
    border-right: 1px solid ${(props) => props.theme.separatorBtm};
  }
  section > div > div {
    background: ${(props) => props.theme.primary};
  }

  h4 {
    margin: 0;
    padding: 15px;
    border-radius: 5px;
    font-size: 1.5em;
    background-color: rgba(0, 0, 0, 0.7);
    color: rgba(${v}, ${v}, ${v}, 0.5);
    color: ${(props) => props.theme.headings};
    background-color: ${(props) => props.theme.primary};
    mix-blend-mode: multiply;
    border-bottom: 1px solid ${(props) => props.theme.separatorBtm};
    text-shadow: 1px 1px 1px #fff;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    transition: 1s font-size;
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
    grid-template-columns: 1fr;
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
  grid-template-columns: 1fr 2fr;
  max-width: 900px;
  align-items: center;
  .em {
    font-weight: 900;
  }
  img {
    width: 300px;
    margin-right: 40px;
    border-radius: 28px 0 28px 0;
    border-bottom: 2px solid ${(props) => props.theme.separatorTop};
    border-top: 2px solid ${(props) => props.theme.separatorBtm};

    transition: 0.3s transform;
    :hover {
      cursor: pointer;
      transform: scale(1.01);
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
  }
  @media (max-width: 1000px) {
    padding: 0 40px;
    img {
      width: 80%;
      height: auto;
    }
    p {
      font-size: 1.2em;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    align-content: center;
    img {
      width: 100%;
      height: auto;
    }
    padding: 0 50px;
  }
`
export default function AboutPage() {
  //console.log(props)
  return (
    <>
      <SEO title="About Rick Janusz" />
      <Heading1>
        <h1>
          <span>About</span>
        </h1>
      </Heading1>

      <PageWrapper>
        <TextWrapper>
          <img src={me} alt="Rick Janusz" width="300" />
          <section>
            <p>
              I'm a {new Date().getFullYear() - 2003} year veteran developer
              working in Chicago, IL. I've been at{' '}
              <span className="em">Epsilon</span>, formerly Conversant, formerly
              Dotomi for {new Date().getFullYear() - 2014} years. Prior to that,
              I spent time at <span className="em">Manifest Digital</span>,{' '}
              <span className="em">Element79</span> of DDB/Omnicom,{' '}
              <span className="em">AnthemWW</span> and also
              <span className="em">Disney Interactive Media Group</span>.
            </p>
            <p>
              I'm currently a <span className="em">Creative Director</span> with
              a focus on <span className="em">Tech</span>,{' '}
              <span className="em">Innovation</span>
              and <span className="em">Creative Capabilities</span>. I lead
              cross organizational teams in developing, implementing new ad
              tech. The space I work in is highly personalized and automated
              requiring deep knowledge of scaling technology to assist in
              delivery to billions of impressions daily.
            </p>
          </section>
        </TextWrapper>

        <h2>Skills</h2>

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

        <h2>Client History</h2>
      </PageWrapper>
      <DarkSection>
        <PageWrapper>
          <ClientRoster />
        </PageWrapper>
      </DarkSection>
    </>
  )
}
