import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import slugify from '../utils/slugify'
const ProjectGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 4rem;
  transition: var(--transition);
  /* place-content: center; */
  @media (max-width: 1000px) {
  }

  @media (max-width: 700px) {
    /* margin: 2rem auto; */
  }
`
const ProjectStyles = styled.div`
  display: grid;
  transition: var(--transition);
  span {
    display: block;
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
    margin-top: 15px;
    transition: var(--transition);
    font-size: 2rem;
  }
  @media (max-width: 1000px) {
    /* margin: 0 auto; */
  }

  @media (max-width: 700px) {
    width: 94vw;
    /* gap: 0; */
  }
`

function SingleProject({ project }) {
  // console.log(this.props)

  return (
    <ProjectStyles>
      <Link
        className="featured-image-container"
        to={`/project/${slugify(project.slug.current)}`}
      >
        <div className="card">
          <Img
            imgStyle={{ objectFit: 'fillmax' }}
            fluid={project.featureImage.asset.fluid}
            alt={project.name}
          />
        </div>
        <span>{project.name}</span>
      </Link>
    </ProjectStyles>
  )
}

export default function ProjectList({ projects }) {
  // console.log(projects)
  return (
    <>
      <ProjectGridStyles>
        {projects.map((project) => (
          <SingleProject
            key={project.id}
            project={project}
            slug={project.slug.current}
          />
        ))}
      </ProjectGridStyles>
    </>
  )
}
