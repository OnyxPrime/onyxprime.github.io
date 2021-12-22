/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
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
      <Helmet>
      <script>
          {`(function () {var a=document.createElement("script");a.type="text/javascript",a.src="https://global.ketchcdn.com/web/v1/config/ryan_sandbox/web/boot.js",a.defer=a.async=!0,document.getElementsByTagName("head")[0].appendChild(a),window.semaphore=window.semaphore||[];})();`}
      </script>
      <script>
        
      </script>
      </Helmet>
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
          <a href="#" style={{color: `#f05623`, marginLeft: `5px`}} onClick={ () => {window.semaphore.push(['showPreferences'])}}>Privacy Settings</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
