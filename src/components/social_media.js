import React from "react"
import { FaFacebookF, FaTwitter, FaGithubAlt, FaLinkedinIn, FaYoutube, FaTwitch, FaDiscord, FaMedium } from "react-icons/fa";
import "../../node_modules/@material/layout-grid/dist/mdc.layout-grid.css"

const SocialMedia = () => (
    <div>
        <div className="socialMedia">
            <div>
                <a className="fb" href="https://www.facebook.com/DevelopersGarageHQ">
                    <FaFacebookF />
                    <span className="screen-reader-text">Facebook</span>
                </a>
            </div>
            <div>
                <a className="twitter" href="https://twitter.com/ryano9791">
                    <FaTwitter />
                    <span className="screen-reader-text">Twitter</span>
                </a>
            </div>
            <div>
                <a className="yt" href="https://www.youtube.com/channel/UCp7TjW2p43aNzkMEBYJ8inw">
                    <FaYoutube />
                    <span className="screen-reader-text">YouTube</span>
                </a>
            </div>
            <div>
                <a className="twitch" href="https://twitch.tv/developersgarage">
                    <FaTwitch />
                    <span className="screen-reader-text">Twitch</span>
                </a>
            </div>
            <div>
                <a className="discord" href="https://discord.gg/KtjweFE">
                    <FaDiscord />
                    <span className="screen-reader-text">Discord</span>
                </a>
            </div>
            <div>
                <a className="gh" href="https://github.com/devsgarage">
                    <FaGithubAlt />
                    <span className="screen-reader-text">GitHub</span>
                </a>
            </div>
            <div>
                <a className="linkedin" href="https://linkedin.com/in/rpoverton">
                    <FaLinkedinIn />
                    <span className="screen-reader-text">LinkedIn</span>
                </a>
            </div>
            <div>
                <a className="medium" href="https://medium.com/@ryan.overton">
                    <FaMedium />
                    <span className="screen-reader-text">LinkedIn</span>
                </a>
            </div>
        </div>
    </div>
)

export default SocialMedia