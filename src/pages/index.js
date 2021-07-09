import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

import HomepageFeatures from '../components/HomepageFeatures'

export default function HomePage({ data }) {
  const features = data.homepage.nodes
  return (
    <>
      <SEO title="Rick Janusz: Home" />
      <HomepageFeatures features={features}></HomepageFeatures>
    </>
  )
}

export const query = graphql`
  query HomepageQuery {
    homepage: allSanityHomepage {
      nodes {
        _id
        mainHL
        main {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        subHL1
        _rawS1Description(resolveReferences: { maxDepth: 10 })
        subBanner1 {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        subHL2
        _rawS2Description(resolveReferences: { maxDepth: 10 })
        subBanner2 {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        subHL3
        _rawS3Description(resolveReferences: { maxDepth: 10 })
        subBanner3 {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
