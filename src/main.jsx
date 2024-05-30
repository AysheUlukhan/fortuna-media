import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from './context/ApiContext.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
