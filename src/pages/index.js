import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import dateformat from "../../node_modules/dateformat/lib/dateformat"
import indexStyles from "../styles/index.module.css"

function getFormattedValue(start, end) {              
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

const IndexPage = ({ data }) => (
  <Layout>
    <div className={"mdc-layout-grid " + indexStyles.topSection}>
      <div className="mdc-layout-grid__inner"> 
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 sectionHeader" style={{ borderStyle: `solid`, borderWidth: `0px 1px 0px 0px`, borderColor: `#f05623`}}>
            <h2>Blog</h2>
            <ul>
              {data.allKontentItemBlog.edges.map(({ node }) => (
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
      <hr style={{margin: `0px 1rem`, opacity: `100%`, height: `1px`, background: `#f05623`}}/>
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className={"mdc-layout-grid__cell mdc-layout-grid__cell--span-12 sectionHeader " + indexStyles.liveStreamSection}>
            <h2>{data.kontentItemPageContent.elements.title.value}</h2>
            <div dangerouslySetInnerHTML={{ __html:data.kontentItemPageContent.elements.body.value }} />
          </div>
        </div>
      </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query MyQuery {
  allKontentItemBlog (limit: 3 sort: {fields: elements___publish_date___value, order: DESC}) {
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
  allKontentItemSpeakingEngagements(sort: {order: DESC, fields: elements___start_date_of_event___value}) {
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
        value
      }
    }
  }
}
`
