import { Plugin } from '@ketch-sdk/ketch-plugin/src/index'
import './cookie_banner.css'
import CookieBannerUI from './cookie_banner_ui';
import ReactDOM from "react-dom";

export const CookieBanner: Plugin = {
    init() {
        let elem = document.getElementById('cookie-banner')
        if (!elem) {
            elem = document.createElement('div')
            elem.id = 'cookie-banner'
            const parentNode = window.document.body
            parentNode.insertBefore(elem, parentNode.firstChild)
            console.log('Cookie banner added')
        }
    },

    showConsentExperience(host, config, consents) {
        const elem = document.getElementById('cookie-banner')

        console.log('Cookie banner shown')

        if (elem) {
            ReactDOM.render(CookieBannerUI(host, config, consents, updateConsent), elem)
        }    
        console.log('Cookie banner shown')
    },
}

let updateConsent = (host, consents) => {
    for (let p of Object.keys(consents.purposes)) {
        consents.purposes[p] = false
    }
    host.setConsent(consents);
    console.log('Cookie banner updated')
    hideConsentExperience();
}

let hideConsentExperience = () => {
    const elem = document.getElementById('cookie-banner')
    if (elem) {
        ReactDOM.unmountComponentAtNode(elem)
    }
    console.log('Cookie banner hidden')
}

declare global {
    interface Window {
      semaphore: any[]
    }
}

export const RegisterCookieBannerPlugin = () => {
    const isBrowser = () => typeof window !== "undefined"
    if (!isBrowser()) 
        return;
    console.log('Cookie banner registered')
    window.semaphore = window.semaphore || []
    window.semaphore.push(['registerPlugin', CookieBanner])
}