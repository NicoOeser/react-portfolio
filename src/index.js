import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/header/header'; 






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Header /> {/* Hier wird die Header-Komponente eingebunden */}
    {/* Weitere Komponenten oder Inhalte hier */}
  </React.StrictMode>
);


