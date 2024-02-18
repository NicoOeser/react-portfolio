import React, { useState, useEffect } from 'react';
import Logo from './components/logo/logo';
import Content from './components/content/content'; // sicherstellen, dass Content korrekt importiert wird

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000); // Verzögerung von 3 Sekunden
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {showLogo ? <Logo /> : <Content />}
    </div>
  );
}

export default App;
