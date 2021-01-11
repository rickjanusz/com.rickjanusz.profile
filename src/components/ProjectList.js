import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ProjectGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 4rem;
  margin: 2rem 4rem;
  transition: var(--transition);
`
const ProjectStyles = styled.div`
  display: grid;
  transition: var(--transition);
  gap: 1rem;
  img {
    width: 200px;
    transition: var(--transition);
    border: 1px solid ${(props) => props.theme.headings};
  }
  .gatsby-image-wrapper {
    overflow: visible !important;
    transition: var(--transition);
  }
  span {
    display: block;
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
    margin-top: 15px;
    transition: var(--transition);
  }
  a {
    transition: var(--transition);
    color: ${(props) => props.theme.dark};
  }
`

// function blocksToText(blocks) {
//   return blocks.map((block) =>
//     block.children.map((child) => child.text).join('')
//   )
// }
var slug = function (str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
  var to = 'aaaaaeeeeeiiiiooooouuuunc------'
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

function SingleProject({ project }) {
  //   console.log(Img)

  return (
    <ProjectStyles>
      <Link to={`/project/${slug(project.slug.current)}`}>
        <Img
          imgStyle={{ objectFit: 'fillmax' }}
          fluid={project.featureImage.asset.fluid}
          alt={project.name}
        />
        <span>{project.name}</span>
      </Link>
    </ProjectStyles>
  )
}

export default function ProjectList({ projects }) {
  console.log(projects)
  return (
    <>
      <ProjectGridStyles>
        {projects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </ProjectGridStyles>
    </>
  )
}
