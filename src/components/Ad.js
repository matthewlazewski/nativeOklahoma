import React, { Component } from 'react';
import postscribe from 'postscribe';


class Ad extends Component {

    componentDidMount () { 
    
        const script = "<script src='https://www.googletagservices.com/dcm/dcmads.js'></script>";
        postscribe("#ad", script);
    }


    render() {
        return (
            <div id="ad" class="d-flex p-3">
                <ins class='dcmads' style={{display:'inline-block',width:728,height:90}}
                    data-dcm-placement='N3535.4473285NATIVEOKLAHOMA/B27681845.334726701'
                    data-dcm-rendering-mode='iframe'
                    data-dcm-https-only
                    data-dcm-gdpr-applies='gdpr=${GDPR}'
                    data-dcm-gdpr-consent='gdpr_consent=${GDPR_CONSENT_755}'
                    data-dcm-addtl-consent='addtl_consent=${ADDTL_CONSENT}'
                    data-dcm-ltd='false'
                    data-dcm-resettable-device-id=''
                    data-dcm-app-id=''>
                </ins>
            </div>
        );
    }
}

export default Ad;