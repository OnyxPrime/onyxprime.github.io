import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn, FaYoutube, FaTwitch, FaDiscord } from "react-icons/fa";
import "../../node_modules/@material/layout-grid/dist/mdc.layout-grid.css"

const SocialMedia = ({}) => (
    <div>
        <div className="socialMedia">
            <div><a className="fb" href="https://www.facebook.com/DevelopersGarageHQ"><FaFacebookF /></a></div>
            <div><a className="twitter" href="https://twitter.com/ryano9791"><FaTwitter /></a></div>
            <div><a className="yt" href="https://www.youtube.com/channel/UCp7TjW2p43aNzkMEBYJ8inw"><FaYoutube /></a></div>
            <div><a className="twitch" href="https://twitch.tv/developersgarage"><FaTwitch /></a></div>
            <div><a className="discord" href="https://discord.gg/KtjweFE"><FaDiscord /></a></div>
            <div><a className="gh" href="https://github.com/devsgarage"><FaGithub /></a></div>
            <div><a className="linkedin" href="https://linkedin.com/in/rpoverton"><FaLinkedinIn /></a></div>
        </div>
    </div>
)

export default SocialMedia