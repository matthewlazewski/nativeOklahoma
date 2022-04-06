import React, { Component } from 'react';

class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins class='dcmads' style={{display: 'inline-block', width: 728 + 'px', height: 90 + 'px'}}
                data-dcm-placement='N3535.4473285NATIVEOKLAHOMA/B27561768.333210661'
                data-dcm-rendering-mode='iframe'
                data-dcm-https-only
                data-dcm-gdpr-applies='gdpr=${GDPR}'
                data-dcm-gdpr-consent='gdpr_consent=${GDPR_CONSENT_755}'
                data-dcm-addtl-consent='addtl_consent=${ADDTL_CONSENT}'
                data-dcm-ltd='false'
                data-dcm-resettable-device-id=''
                data-dcm-app-id=''>
                <script src='https://www.googletagservices.com/dcm/dcmads.js'></script>
            </ins>
        );
    }
}

export default GoogleAds;