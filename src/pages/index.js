import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import dateformat from "../../node_modules/dateformat/lib/dateformat"
import indexStyles from "../styles/index.module.css"

function getFormattedValue(start, end){              
  let start_date = new Date(start);
    let end_date = new Date(end);        
    let event_date = "Not the same";
    if (start_date.getTime() === end_date.getTime()){
      event_date = dateformat(start_date, "mmmm dd, yyyy")      
    }
    else {
      event_date = dateformat(start_date, "mmmm dd-" ) + dateformat(end_date, "dd, yyyy")
    }

    return event_date
}
const IndexPage = ({ data }) => (
  <Layout>
    <div className="mdc-layout-grid">
      <div className="mdc-layout-grid__inner"> 
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 sectionHeader">
            <h2>Blog</h2>
            <ul>
              {data.allKontentItemBlog.edges.map(({ node }) => (
                <li key={node.id}>
                <Link className="sectionLinks" to={'blog/' + node.elements.url_slug.value}>
                  <h3>{node.elements.blog_title.value}</h3>
                  <p>{node.elements.publish_date.value}</p>   
                </Link>               
                </li>
              ))}
            </ul>
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 sectionHeader">
            <h2>Speaking</h2>
            <ul>            
              {data.allKontentItemSpeakingEngagements.edges.map(({ node }) => (
                <li key={node.id}>
                  <a className="sectionLinks" href={node.elements.link_to_event_site.value}>
                    {node.elements.name_of_event.value}
                  </a>
                  <p>
                    <i>{node.elements.location.value}</i>, {getFormattedValue(node.elements.start_date_of_event.value, node.elements.end_date_of_event.value)} 
                  </p>
                </li>                
              ))}
            </ul>
          </div>
        </div>                
      </div>
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className={"mdc-layout-grid__cell mdc-layout-grid__cell--span-12 sectionHeader " + indexStyles.liveStreamSection}>
            <h2>{data.kontentItemPageContent.elements.title.value}</h2>
            <div dangerouslySetInnerHTML={{ __html:data.kontentItemPageContent.elements.body.resolvedData.html }} />
          </div>
        </div>
      </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query MyQuery {
  allKontentItemBlog (sort: {fields: elements___publish_date___value, order: ASC}) {
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
        }
      }
    }
  }
  allKontentItemSpeakingEngagements(sort: {order: ASC, fields: elements___start_date_of_event___value}) {
    edges {
      node {
        id
        elements {
          location {
            value
          }
          name_of_event {
            value
          }
          start_date_of_event {
            value(formatString: "MM/DD/YYYY")
          }
          end_date_of_event {
            value(formatString: "MM/DD/YYYY")
          }
          link_to_event_site {
            value
          }
        }
      }
    }
  }
  kontentItemPageContent(system: {codename: {eq: "ryans_live_stream_info"}}) {
    id
    elements {
      title {
        value
      }
      body {
        resolvedData {
          html
        }
      }
    }
  }
}
`
