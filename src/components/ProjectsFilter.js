import { useStaticQuery, graphql, Link } from 'gatsby'
import React from 'react'
import slugify from '../utils/slugify'

import StyledTag from '../styles/TagStyles'

function countTagsInProjects(projects) {
  //   console.log(projects)
  const counts = projects
    .map((project) => project.tags)
    .flat()
    .reduce((acc, tag) => {
      const existingTag = acc[tag.id]
      if (existingTag) {
        existingTag.count += 1
      } else {
        acc[tag.id] = {
          id: tag.id,
          name: tag.name,
          count: 1,
        }
      }
      return acc
    }, {})
  const sortedTags = Object.values(counts).sort((a, b) => b.count - a.count)
  return sortedTags
}

export default function ProjectsFilter({ activeTag }) {
  const { projects } = useStaticQuery(graphql`
    query MyQuery {
      tags: allSanityTag {
        nodes {
          name
          id
        }
      }
      projects: allSanityProject {
        nodes {
          tags {
            name
            id
          }
        }
      }
    }
  `)
  // console.clear()
  //   console.log({ tags, projects })

  const tagsWithCounts = countTagsInProjects(projects.nodes)
  // console.log(tagsWithCounts)

  return (
    <StyledTag>
      <p>{activeTag}</p>
      {tagsWithCounts.map((tag) => (
        <Link
          to={`/tag/${slugify(tag.name)}`}
          activeClassName="active"
          key={tag.id}
        >
          <span className="name">{tag.name}</span>
          <span className="count">{tag.count}</span>
        </Link>
      ))}
    </StyledTag>
  )
}
