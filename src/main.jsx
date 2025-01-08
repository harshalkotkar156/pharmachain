import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterSetup from './router'; // Import the RouterSetup component instead of App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterSetup /> {/* Render the RouterSetup component */}
  </React.StrictMode>
);
