const path = require(`path`)
exports.onCreateNode = ({ node, actions }) => {    
  }

  exports.createPages = async ({graphql, actions}) => {
      const { createPage } = actions
      let result = await graphql(`
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
      // Create blog-list pages
      const posts = result.data.allKontentItemBlog.edges;
      const postsPerPage = 6;
      const numPages = Math.ceil(posts.length / postsPerPage);
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: path.resolve("./src/templates/blog-list-template.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })  
      })

      // Create about page
      result = await graphql(`
      query {
        kontentItemAbout {
          id
        }
      }
      `)
      
      console.log(result);
      createPage({
        path: `/about`,
        component: path.resolve('./src/templates/about-template.js'),    
        context: {
          id: result.data.kontentItemAbout.id
        }    
      })
  }