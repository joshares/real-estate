import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/product_context';
import {Auth0Provider} from '@auth0/auth0-react'
import { UserProvider } from './context/user_context';
import { AgentProvider } from './context/agent_context';
import reportWebVitals from './reportWebVitals';
//dev-0qgqpwy84cgcyfwh.us.auth0.com
// 7Rq3s4sS8poE99cf4wE1epIEvWCIZBrk


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-0qgqpwy84cgcyfwh.us.auth0.com"
  clientId="7Rq3s4sS8poE99cf4wE1epIEvWCIZBrk"
  redirectUri={window.location.origin}
  cacheLocation='localstorage'
  >
  <UserProvider>
  <React.StrictMode>
    <ProductsProvider>
    <AgentProvider>
    <App />
    </AgentProvider>
    </ProductsProvider>
  </React.StrictMode>
  </UserProvider>
  </Auth0Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
