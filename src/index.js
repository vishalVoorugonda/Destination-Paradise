import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ItemProvider } from './components/Context';
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <React.StrictMode>
    <ItemProvider>
    <App />
    </ItemProvider>
  </React.StrictMode>
  </BrowserRouter>
);

