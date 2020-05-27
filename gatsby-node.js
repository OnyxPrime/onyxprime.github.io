const path = require(`path`)
exports.onCreateNode = ({ node, actions }) => {    
  }

  exports.createPages = async ({graphql, actions}) => {
      const { createPage } = actions
      const result = await graphql(`
        query {
            allKontentItemBlog {
              edges {
                node {
                  id
                  elements {
                    url_slug {
                      value
                    }
                  }
                }
              }
            }
          }
      `)
      result.data.allKontentItemBlog.edges.forEach(({ node }) => {
          createPage({
              path: `blog/${node.elements.url_slug.value}`,
              component: path.resolve(`./src/templates/blog-post.js`),
              context: {
                  id: node.id,
              },
          })
      })
    }