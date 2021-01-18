import React from 'react'
import PortableText from '@sanity/block-content-to-react'
import urlBuilder from '@sanity/image-url'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

import PageWrapper from '../styles/PageWrapperStyles'
import SEO from '../components/SEO'
import Code from '../utils/code'

const ImageStyles = styled.div`
  img {
    width: 300px;
    display: inline-block;
    border-bottom: 1px solid ${(props) => props.theme.separatorBtm};
    border-top: 1px solid ${(props) => props.theme.separatorTop};
  }
  .gatsby-image-wrapper {
    margin-bottom: 5px;
  }
`
const VideoStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr 1fr);
  grid-template-rows: repeat(1fr 1fr);
  grid-row: span 2;
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
    }
  }
`
const BodyWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1000px;
  gap: 20px;
  figure {
    transition: var(--transition);
    float: left;
    margin-left: 0;
    clear: both;
    img {
      width: 100%;
    }
  }
`

const urlFor = (source) =>
  urlBuilder({ projectId: 'kk9pk2m1', dataset: 'production' }).image(source)

const serializer = {
  types: {
    mainImage: (props) => (
      <figure>
        <img
          src={urlFor(props.node.asset).width(600).url()}
          alt={props.node.alt}
        />
        <figcaption>{props.node.caption}</figcaption>
      </figure>
    ),
    code: Code,
  },
}

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
            serializers={serializer}
          />
        </TextWrapper>
        <BodyWrapper>
          <ImageStyles>
            {project.images.map((image, i) => (
              <Img
                key={project.name + i}
                fluid={image.asset.fluid}
                alt={project.name}
                width="970"
              />
            ))}
          </ImageStyles>

          <PortableText blocks={project._rawBody} serializers={serializer} />
        </BodyWrapper>
        <VideoStyles>
          {project.videoUrls.map((url) => (
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
        </VideoStyles>

        <ul>
          {project.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
      </PageWrapper>
    </>
  )
}

export default SingleProjectPage

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      videoUrls
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
