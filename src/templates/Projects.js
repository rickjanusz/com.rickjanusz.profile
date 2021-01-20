import React from 'react'
import PortableText from '@sanity/block-content-to-react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

import PageWrapper from '../styles/PageWrapperStyles'
import SEO from '../components/SEO'
import { Serializer } from '../utils/serializer'
import SectionDark from '../components/SectionDark'

const ImageStyles = styled.div`
  width: auto;
  .gatsby-image-wrapper {
    margin-bottom: 5px;
  }
`
const LandscapeVideoStyles = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  margin: 0 0 30px;
`
const PortraitVideoStyles = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0;
`

const Breadcrumbs = styled.div`
  position: absolute;
  color: ${(props) => props.theme.dark};
  a {
    color: ${(props) => props.theme.primary};
    text-decoration: underline;
  }
  padding: 10px 0 0 30px;
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
    padding-bottom: calc(100% - 20px);
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
      padding-bottom: calc(100% - 10px);
    }
  }
`
const BodyWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0;
  max-width: 1000px;
  gap: 20px;
  height: auto;
  figure {
    transition: var(--transition);
    width: 100%;
    margin: 50px 0;
    img {
      width: 100%;
    }
  }
  .imgWrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  @media (max-width: 1000px) {
  }
  @media (max-width: 700px) {
    padding: 0 2rem;
  }
`
const TagStyles = styled.div`
  display: flex;
  margin: 1rem;
  gap: 2rem;
  flex-flow: row wrap;
  color: ${(props) => props.theme.white};
  flex-basis: auto;
  justify-content: center;
  span {
    background-color: ${(props) => props.theme.primary};
    padding: 1em;
    flex: 1 1 1;
    border-left: 1px solid ${(props) => props.theme.dark};
    border-top: 1px solid ${(props) => props.theme.dark};
    border-right: 1px solid ${(props) => props.theme.light};
    border-bottom: 1px solid ${(props) => props.theme.light};
  }
`

function getDimensions(dim, url) {
  let x = url.split('=')
  let y = x[1].split('x')
  let w = y[0]
  let h = y[1]

  if (dim === 'w') {
    return w
  } else {
    return h
  }
}

function AdditionalDetails({ project }) {
  if (project._rawBody !== null || project.images.length !== 0) {
    return (
      <>
        <h2>
          <span>Additional Details</span>
        </h2>
        <SectionDark>
          <BodyWrapper>
            <PortableText blocks={project._rawBody} serializers={Serializer} />
            <ImageStyles className="imgWrapper">
              {project.images.map((image, i) => (
                <Img
                  key={project.name + i}
                  fluid={image.asset.fluid}
                  alt={project.name}
                  width="970"
                />
              ))}
            </ImageStyles>
          </BodyWrapper>
        </SectionDark>
      </>
    )
  } else {
    return false
  }
}

function VideoDisplay({ project }) {
  if (project.lndscp_videoUrls.length || project.prtrt_videoUrls.length) {
    console.log('VIDS: ', project)
    return (
      <>
        <h2>
          <span>Video Examples</span>
        </h2>
        <PageWrapper>
          <LandscapeVideoStyles>
            {project.lndscp_videoUrls.map((url) => (
              <div>
                <iframe
                  title={project.name}
                  key={`video-${project.id}`}
                  src={url}
                  width="100%"
                  height={getDimensions('h', url)}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>
            ))}
          </LandscapeVideoStyles>

          <PortraitVideoStyles>
            {project.prtrt_videoUrls.map((url) => (
              <div>
                <iframe
                  title={project.name}
                  key={`video-${project.id}`}
                  src={url}
                  width="100%"
                  height={getDimensions('h', url)}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>
            ))}
          </PortraitVideoStyles>
        </PageWrapper>
      </>
    )
  } else {
    return false
  }
}

function TagDisplay({ project }) {
  if (project.tags !== null) {
    return (
      <>
        <h2>
          <span>Tags</span>
        </h2>
        <SectionDark>
          <PageWrapper>
            <TagStyles>
              {project.tags.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
              ))}
            </TagStyles>
          </PageWrapper>
        </SectionDark>
      </>
    )
  } else {
    return false
  }
}

const SingleProjectPage = ({
  location: { pathname },
  data: { project, features },
}) => {
  console.log(pathname)
  return (
    <>
      <SEO title={project.name} />
      <Breadcrumbs>
        <Link to="/projects/">Projects</Link> / {project.name}
      </Breadcrumbs>
      <h1>
        <span>{project.name}</span>
      </h1>
      <PageWrapper>
        <TextWrapper>
          <div className="featured-image-container">
            <div className="card">
              {features.nodes.map((feature, i) => {
                const loc = pathname.split('/')
                if (loc[2] === feature.slug.current) {
                  return (
                    <Img
                      key={`${loc[2]}${i}`}
                      fluid={feature.featureImage.asset.fluid}
                    />
                  )
                } else {
                  return false
                }
              })}
            </div>
          </div>

          <PortableText
            blocks={project._rawDescription}
            serializers={Serializer}
          />
        </TextWrapper>
      </PageWrapper>
      <AdditionalDetails project={project} />
      <VideoDisplay project={project} />
      <TagDisplay project={project} />
    </>
  )
}

export default SingleProjectPage

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      lndscp_videoUrls
      prtrt_videoUrls
      _rawDescription(resolveReferences: { maxDepth: 10 })
      _rawBody(resolveReferences: { maxDepth: 10 })
      images {
        asset {
          fluid(maxWidth: 970) {
            ...GatsbySanityImageFluid
          }
        }
      }
      tags {
        name
        id
      }
    }
    features: allSanityProject {
      nodes {
        slug {
          current
        }
        featureImage {
          asset {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
