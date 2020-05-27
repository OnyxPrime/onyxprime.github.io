import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { RichTextElement } from "@kentico/gatsby-kontent-components"
export default ({ data }) => {
    const richTextElement = data.kontentItemBlog.elements.content

  // Other sample data required for resolution (even from different query)
    const contextData = data.kontentItemBlog.system
    console.log(richTextElement.links);
    return (
        <Layout>
            <h2 style={{marginBottom: `0`}}>{data.kontentItemBlog.elements.blog_title.value}</h2>
            <p style={{fontSize: `.75rem`, fontStyle: `italic`}}>{data.kontentItemBlog.elements.publish_date.value}</p>            
            <RichTextElement
                value={richTextElement.value}
                links={richTextElement.links}
                resolveLink={(link, domNode) => {
                  const parentItemType = contextData.type // It is possible to use external data for resolution                                    
                  return (                    
                    <Link to={`/${parentItemType}/${link.urlSlug}`}>
                      {domNode.children[0].data}
                    </Link>
                  )
                }}
              />
        </Layout>
    )
}
export const query = 
    graphql`
    query($id: String!) {  
        kontentItemBlog(id: { eq: $id }) { 
            id
            elements {
              publish_date {
                value(formatString: "MM/DD/YYYY")
              }
              content {
                resolvedData {
                  html
                }
                links {
                  link_id: linkId
                  codename
                  urlSlug
                  type
                }
                value
              }
              blog_title {
                value
              }
            }
            system {
              codename
              type
            }
        }
    }
    `