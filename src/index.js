import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataComponent from './components/dataComponent';
// import AppClass from "./AppClass";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataComponent />   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
