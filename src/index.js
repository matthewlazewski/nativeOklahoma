import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from 'shopify-buy';


const client = Client.buildClient({    storefrontAccessToken: '2b493d3d7cf002b24add95607b90265c',    domain: 'native-oklahoma-store.myshopify.com'});

ReactDOM.render(
  
    <React.StrictMode>
      <App client={client} />
    </React.StrictMode>
  ,
  document.getElementById('root')
);
