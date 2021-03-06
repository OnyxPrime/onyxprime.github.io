import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import "../../node_modules/@material/layout-grid/dist/mdc.layout-grid.css"
import SocialMedia from "./social_media"

const Header = ({ logo }) => (
  <header
    style={{
     
      alignItems: `center`
    }}
  >
    <nav style={{height: `3rem`, backgroundColor: `#f05623`, position: 'fixed', top: '0', width: '100%', zIndex: '500'}}>
      <div className="mdc-layout-grid" style={{padding: `0`, height: `3rem`, maxWidth: `60rem`}}>
        <div className="mdc-layout-grid__inner" style={{height: `3rem`}}>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--align-middle">            
            <div style={{ fontSize: `1.1rem`, fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                        color: `black`, fontWeight: `bold`, marginLeft: `.5rem`}}>
              <Link to="/" style={{textDecoration: `none`, color: `black`, fontStyle: `none`}}>
              <Img fixed={logo} style={{verticalAlign: `middle`, marginBottom: `0`}} alt="Developers Garage logo" />
                <span style={{marginLeft: `10px`}}>Ryan Overton</span>
              </Link>
            </div>
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--align-middle">
            <div style={{ display: `flex`, justifyContent: `flex-end`}}>              
              <Link to="/about"
                    style={{    
                      margin: `0 10px 0 10px`,                
                      color: `black`,
                      textDecoration: `none`,
                      fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                      fontSize: `.9rem`,
                    }}>
                About
              </Link>
              <Link to="/blog"
                    style={{    
                      margin: `0 10px 0 10px`,                
                      color: `black`,
                      textDecoration: `none`,
                      fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                      fontSize: `.9rem`,
                    }}>
                Blog
              </Link>
              <a href="https://teespring.com/stores/developers-garage" style={{    
                      margin: `0 10px 0 10px`,                
                      color: `black`,
                      textDecoration: `none`,
                      fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                      fontSize: `.9rem`,
                    }}>Shop</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      style={{
        margin: `0 auto`,
        marginTop: '3rem',
        padding: `1rem 1rem`,
        backgroundImage: `url(/assets/black-gray.png)`,
        backgroundSize: `30rem`
      }}
    >
      <img style={{
        margin: `auto`,
        display: `block`,
        height: `8rem`,
        objectFit: `scale-down`
      }} src="/assets/developers-garage-color.png" alt="Developers Garage Logo" />
      <h2
          style={{
            color: `white`,
            textDecoration: `none`,
            textAlign: `center`,  
            fontSize: `1.15rem`,   
            fontWeight: `normal`,  
            opacity: `.85`     ,
            fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
            margin: `0rem`,
            padding: `1rem 0rem`}} >
              Exploring cool tech, dev practices and tools used in development
      </h2>
      <SocialMedia></SocialMedia>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
