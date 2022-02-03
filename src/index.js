import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Client from 'shopify-buy';

const rootReducer = combineReducers({

})

const client = Client.buildClient({    storefrontAccessToken: '2b493d3d7cf002b24add95607b90265c',    domain: 'native-oklahoma-store.myshopify.com'});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider client={client} store={store} >
    <React.StrictMode>
      <App client={client} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
