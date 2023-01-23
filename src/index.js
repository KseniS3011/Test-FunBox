import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageProduct from './components/PageProduct/PageProduct';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageProduct />
  </React.StrictMode>
);

reportWebVitals();
