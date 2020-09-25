/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }      
      mobileImage: file(relativePath: { eq: "logo-with-white-icon.png" }) {
        childImageSharp {
          fixed(width: 42, height: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} logo={data.mobileImage.childImageSharp.fixed} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `60rem`,
          padding: `0 1.0875rem 0`,
        }}
      >
        <main>{children}</main>
      </div>
        <footer style={{backgroundColor: `black`,
        backgroundImage: `url(/assets/black-gray.png)`,
        backgroundSize: `30rem`,
          color: `white`, 
          height: `4rem`, 
          display: `flex`, 
          alignItems: `center`,
          justifyContent: `center`,
          padding: `0 1.0875rem`,
          fontSize: `80%`}}>
          © Copyright {new Date().getFullYear()} 
          ,&nbsp;
          <span style={{color: `#f05623`}}>Developers Garage</span>.&nbsp;all rights reserved.
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
