import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { RichTextElement } from "@kentico/gatsby-kontent-components"
import Helmet from "react-helmet"

function getSrcUrl(data) {  
  if (data.length > 0){
    return data[0].url;
  }
  else
  {
    return " ";
  }
}

function getSrcDescription(data) {
  if (data.length > 0){
    return data[0].description;
  }
  else
  {
    return " ";
  }
}

export default ({ data, location }) => {
    const richTextElement = data.kontentItemBlog.elements.content

  // Other sample data required for resolution (even from different query)
    const contextData = data.kontentItemBlog.system
    console.log(richTextElement.links);
    return (
        <Layout>
          <Helmet>          
            <title>{data.kontentItemBlog.elements.blog_title.value}</title>
            <meta name="description" content={data.kontentItemBlog.elements.description.value} />
            
            <meta itemprop="name" content={data.kontentItemBlog.elements.blog_title.value} />
            <meta itemprop="description" content={data.kontentItemBlog.elements.description.value} />
            <meta itemprop="image" content={getSrcUrl(data.kontentItemBlog.elements.teaser_image.value)} />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ryano9791" />
            <meta name="twitter:title" content={data.kontentItemBlog.elements.blog_title.value} />
            <meta name="twitter:description" content={data.kontentItemBlog.elements.description.value} />
            <meta name="twitter:creator" content="@ryano9791" />
            
            <meta name="twitter:image:src" content={getSrcUrl(data.kontentItemBlog.elements.teaser_image.value)} />
            
            <meta property="og:title" content={data.kontentItemBlog.elements.blog_title.value} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={location.pathname} />
            <meta property="og:image" content={getSrcUrl(data.kontentItemBlog.elements.teaser_image.value)} />
            <meta property="og:description" content={data.kontentItemBlog.elements.description.value} />
            <meta property="og:site_name" content="Developers Garage" />
            {/* <meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
            <meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
            <meta property="article:section" content="Article Section" />
            <meta property="article:tag" content="Article Tag" />
            <meta property="fb:admins" content="Facebook numberic ID" /> */}
          </Helmet>
          <div style={{padding: '2rem'}}>
            <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%'}} src={getSrcUrl(data.kontentItemBlog.elements.teaser_image.value)}  alt={getSrcDescription(data.kontentItemBlog.elements.teaser_image.value)}></img>
            <h2 style={{marginBottom: `0`}}>{data.kontentItemBlog.elements.blog_title.value}</h2>
            <p style={{fontSize: `.75rem`, fontStyle: `italic`}}>{data.kontentItemBlog.elements.publish_date.value}</p>            
            <RichTextElement
                value={richTextElement.value}
                links={richTextElement.links}
                resolveLink={(link, domNode) => {
                  const parentItemType = contextData.type // It is possible to use external data for resolution                                    
                  return (                    
                    <Link to={`/${parentItemType}/${link.url_slug}`}>
                      {domNode.children[0].data}
                    </Link>
                  )
                }}
              />
          </div>
        </Layout>
    )
}
export const query = 
    graphql`
    query PostQuery ($id: String!) {  
        kontentItemBlog(id: { eq: $id }) { 
            id
            elements {
              publish_date {
                value(formatString: "MM/DD/YYYY")
              }
              content {
                value
                links {
                  link_id
                  codename
                  url_slug
                  type
                }
                value
              }
              blog_title {
                value
              }
              teaser_image {
                value {
                  url
                  description
                }
              }
              description {
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