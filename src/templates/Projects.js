import React from 'react'
import PortableText from '@sanity/block-content-to-react'
import urlBuilder from '@sanity/image-url'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Heading1 from '../components/Heading1'
import PageWrapper from '../styles/PageWrapperStyles'
import SEO from '../components/SEO'

const ImageStyles = styled.div``
const VideoStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr 1fr);
  grid-template-rows: repeat(1fr 1fr);
  grid-row: span 2;
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
  },
}

function getDimensions(dim, url) {
  let x = url.split('=')
  let y = x[1].split('x')
  let w = y[0]
  let h = y[1]

  // let q = (w / h) * 100 + '%'
  // return height %
  // return q

  // return w or h
  if (dim === 'w') {
    return w
  } else {
    return h
  }
}

export default function SingleProjectPage({ data: { project } }) {
  console.log(project)

  return (
    <>
      <SEO title={project.name} />
      <Heading1>
        <h1>
          <span>{project.name}</span>
        </h1>
      </Heading1>
      <PageWrapper>
        {/* <pre>{JSON.stringify(project.description.map((child) => child))}</pre> */}
        <PortableText
          blocks={project._rawDescription}
          serializers={serializer}
        />

        <ImageStyles>
          {project.images.map((image, i) => (
            <Img
              key={project.name + i}
              fluid={image.asset.fluid}
              alt={project.name}
            />
          ))}
        </ImageStyles>

        <VideoStyles>
          {project.videoUrls.map((url) => (
            // console.log(url);
            // <video src={url} />
            // <video controls width="300" height="600">
            //   <source src={url} />
            // </video>
            <div>
              <iframe
                src={url}
                // width={getDimensions('w', url)}
                width="100%"
                // height="auto"
                height={getDimensions('h', url)}
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </VideoStyles>

        <ul>
          {project.tags.map((tag) => (
            <li>{tag.name}</li>
          ))}
        </ul>
      </PageWrapper>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      videoUrls
      _rawDescription(resolveReferences: { maxDepth: 10 })
      images {
        asset {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbySanityImageFluid
          }
        }
      }
      tags {
        name
        id
      }
    }
  }
`
