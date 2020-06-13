import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../../node_modules/@material/layout-grid/dist/mdc.layout-grid.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
     
      alignItems: `center`
    }}
  >
    <nav style={{height: `54px`, backgroundColor: `#f05623`}}>
      <div className="mdc-layout-grid" style={{padding: `0`, height: `54px`, maxWidth: `60rem`}}>
        <div className="mdc-layout-grid__inner" style={{height: `54px`}}>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--align-middle">            
            <div style={{ fontSize: `1.1rem`, fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                        color: `black`, fontWeight: `bold`}}>
              <Link to="/" style={{textDecoration: `none`, color: `black`, fontStyle: `none`}}>
              <img style={{height: `42px`, verticalAlign: `middle`, marginBottom: `0`}} src={`/me_small.png`} alt="hand drawn profile of Ryan" />
              Ryan Overton
              </Link>
            </div>
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--align-middle">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      style={{
        margin: `0 auto`,
        padding: `1rem 1rem`,
        backgroundImage: `url(/assets/black-gray.png)`,
        backgroundSize: `30rem`
      }}
    >
      <img style={{
        margin: `auto`,
        display: `block`,
        height: `8rem`
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
