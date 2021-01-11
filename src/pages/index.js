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
        subBanner1 {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        subHL2
        subBanner2 {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        subHL3
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
