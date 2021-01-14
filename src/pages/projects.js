import React from 'react'
import SEO from '../components/SEO'

import { graphql } from 'gatsby'
import ProjectList from '../components/ProjectList'
import ProjectsFilter from '../components/ProjectsFilter'
import PageWrapper from '../styles/PageWrapperStyles'

export default function ProjectsPage({ data }, pageContext) {
  const projects = data.projects.nodes
  return (
    <div>
      <SEO title="Projects" />

      <h1>
        <span>Projects</span>
      </h1>
      <PageWrapper>
        <ProjectsFilter activeTag={pageContext.tag} />
        <ProjectList projects={projects} />
      </PageWrapper>
    </div>
  )
}

export const query = graphql`
  query ProjectQuery($tag: [String]) {
    projects: allSanityProject(
      filter: { tags: { elemMatch: { name: { in: $tag } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        tags {
          id
          name
        }
        images {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        featureImage {
          asset {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawDescription(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`
