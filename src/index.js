import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const router = <BrowserRouter> <React.StrictMode> <App /> </React.StrictMode> </BrowserRouter>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(router);

reportWebVitals();
