import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
  
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
  
  function srcExists(data){
    if (data.length > 0){
      return '';
    }
    else
    {
      return 'hideMe';
    }
  }

export default ({data, pageContext}) => {
    const posts = data.allKontentItemBlog.edges
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/blog" : "/blog/" +(currentPage - 1).toString()
    const nextPage = "/blog/" + (currentPage + 1).toString()


    return (
      <Layout>
        <div className="blog-list-container">
            <ul className="blog-list">
                {posts.map(({ node }) => (
                    // const title = node.elements.blog_title.value || node.elements.url_slug.value
                    // return <div key={node.elements.url_slug.value}>{title}</div>

                    <li key={node.id}>
                    <Link className="sectionLinks" to={'blog/' + node.elements.url_slug.value}>
                        <img src={getSrcUrl(node.elements.teaser_image.value)} 
                            alt={getSrcDescription(node.elements.teaser_image.value)}
                            className={srcExists(node.elements.teaser_image.value)}></img>
                        <h3>{node.elements.blog_title.value}</h3>
                        <p>{node.elements.publish_date.value}</p>   
                    </Link>               
                    </li>
                ))}
            </ul>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {!isFirst && (
                    <Link to={prevPage} rel="prev" style={{margin: '0 1rem'}}>
                    ← Previous Page
                    </Link>
                )}
                {!isLast && (
                    <Link to={nextPage} rel="next" style={{margin: '0 1rem'}}>
                    Next Page →
                    </Link>
                )}
            </div>
        </div>
      </Layout>
    )
}

export const query = graphql`
  query query($skip: Int!, $limit: Int!) {
    allKontentItemBlog(
      sort: { fields: elements___publish_date___value, order: DESC }
      limit: $limit
      skip: $skip
    ) {
        edges {
            node {
              id
              elements {
                blog_title {
                  value
                }
                publish_date {
                  value(formatString: "MMMM DD, YYYY")
                }
                url_slug {
                  value
                }
                teaser_image {
                  value {
                    url
                    description
                  }
                }
            }
        }        
    }
    }
}
`