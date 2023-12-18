import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';


let global_url = 'https://users.pythonanywhere.com/api/v1/'
axios.defaults.baseURL = global_url;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
