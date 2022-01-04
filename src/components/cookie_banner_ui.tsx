import React from 'react';
import { Ketch, Consent } from '@ketch-sdk/ketch-plugin/src/index'

function CookieBannerUI(host: Ketch, config: Configuration, consents: Consent, updateConsent: (host: Ketch, consent: Consent) => void) {
    
  return (
    <div className="cookie-banner-content" style={{backgroundColor:config.theme?.bannerBackgroundColor}}>
        <div className="cookie-banner-text">
            <h1>{config.experiences?.consent?.banner.title}</h1>
            <p>
                {config.experiences?.consent?.banner.footerDescription}
            </p>
            <button className="cookie-banner-button" 
                    style={{backgroundColor:config.theme?.bannerButtonColor,
                            borderRadius:config.theme?.buttonBorderRadius+'rem'}}
                    onClick= {() => updateConsent(host, consents)}>
                    {config.experiences?.consent?.banner.buttonText}
            </button>
        </div>
    </div>
  )
}

export default CookieBannerUI