import React, { useState, useEffect } from 'react';
import Logo from './components/logo/logo';
import Header from './components/header/header'; 
import Content from './components/content/content';

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      setShowHeader(true);
      setShowContent(true); 
    }, 3000); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {showLogo ? <Logo /> : null}
      {showHeader ? <Header /> : null} 
      {showContent ? <Content /> : null} 
    </div>
  );
}

export default App;
