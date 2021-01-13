import { useStaticQuery, graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import slugify from '../utils/slugify'

const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  transition: var(--transition);
  a {
    transition: var(--transition);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 1rem;
    padding: 10px;
    border-radius: 8px 0 8px 0;
    background-color: ${(props) => props.theme.dark};
    color: ${(props) => props.theme.light};
    align-items: center;
    .count {
      transition: var(--transition);
      border-radius: 5px 0 5px 0;
      padding: 4px;
      color: ${(props) => props.theme.dark};
      background-color: ${(props) => props.theme.light};
    }
    &.active {
      transition: var(--transition);
      background-color: ${(props) => props.theme.light};
      color: ${(props) => props.theme.dark};
    }
    &.active .count {
      transition: var(--transition);
      color: ${(props) => props.theme.light};
      background-color: ${(props) => props.theme.dark};
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }

  @media (max-width: 700px) {
  }
`

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
  const { tags, projects } = useStaticQuery(graphql`
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
  console.clear()
  //   console.log({ tags, projects })

  const tagsWithCounts = countTagsInProjects(projects.nodes)
  console.log(tagsWithCounts)

  return (
    <Tag>
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
    </Tag>
  )
}
