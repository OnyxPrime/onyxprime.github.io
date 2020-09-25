import React from "react"
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn, FaYoutube, FaTwitch, FaDiscord } from "react-icons/fa";
import "../../node_modules/@material/layout-grid/dist/mdc.layout-grid.css"

const SocialMedia = () => (
    <div>
        <div className="socialMedia">
            <div>
                <a className="fb" href="https://www.facebook.com/DevelopersGarageHQ">
                    <FaFacebookF />
                    <span class="screen-reader-text">Facebook</span>
                </a>
            </div>
            <div>
                <a className="twitter" href="https://twitter.com/ryano9791">
                    <FaTwitter />
                    <span class="screen-reader-text">Twitter</span>
                </a>
            </div>
            <div>
                <a className="yt" href="https://www.youtube.com/channel/UCp7TjW2p43aNzkMEBYJ8inw">
                    <FaYoutube />
                    <span class="screen-reader-text">YouTube</span>
                </a>
            </div>
            <div>
                <a className="twitch" href="https://twitch.tv/developersgarage">
                    <FaTwitch />
                    <span class="screen-reader-text">Twitch</span>
                </a>
            </div>
            <div>
                <a className="discord" href="https://discord.gg/KtjweFE">
                    <FaDiscord />
                    <span class="screen-reader-text">Discord</span>
                </a>
            </div>
            <div>
                <a className="gh" href="https://github.com/devsgarage">
                    <FaGithub />
                    <span class="screen-reader-text">GitHub</span>
                </a>
            </div>
            <div>
                <a className="linkedin" href="https://linkedin.com/in/rpoverton">
                    <FaLinkedinIn />
                    <span class="screen-reader-text">LinkedIn</span>
                </a>
            </div>
        </div>
    </div>
)

export default SocialMedia