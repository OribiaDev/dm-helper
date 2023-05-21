import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//CSS
import './CSS/Websites/Home.css'
import './CSS/Componets/TopInfo.css'
import './CSS/Componets/QuestionGen.css'
import './CSS/Componets/MainComponet.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

