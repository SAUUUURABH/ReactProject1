import React from 'react'; // Make sure to import React
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
