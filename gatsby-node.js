import path from 'path'
import slugify from './src/utils/slugify'

async function createTagPages({ graphql, actions }) {
  const tagTemplate = path.resolve('./src/pages/projects.js')
  const { data } = await graphql(`
    query {
      tags: allSanityTag {
        nodes {
          name
          id
        }
      }
    }
  `)
  data.tags.nodes.forEach((tag) => {
    // console.log('CREATING PAGES FOR', tag.name)
    actions.createPage({
      path: `tag/${slugify(tag.name)}`,
      component: tagTemplate,
      context: {
        tag: tag.name,
        // TODO: regex for topping
      },
    })
  })
}

async function createProjectPages({ graphql, actions }) {
  // call template
  const projectTemplate = path.resolve('./src/templates/Projects.js')
  // query projects
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)
  //   console.log(data)
  // loop over projects to create
  data.projects.nodes.forEach((project) => {
    // console.log(project.name)
    actions.createPage({
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    })
  })
}

//USE THIS FOR PULLING DOWN STATIC DATA FROM AN API- NOT like weather
async function fetchAPI({ actions, createNodeId, createContentDigest }) {
  // console.log('turn weather into nodes')
}

export async function sourceNodes(params) {
  await Promise.all([fetchAPI(params)])
}

export async function createPages(params) {
  // create pages dynamically
  // 1. projects
  await Promise.all([createProjectPages(params), createTagPages(params)])
  // 2. tags
}
