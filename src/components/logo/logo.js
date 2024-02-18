import React, { useEffect } from 'react';
import './logo.scss'; // Importiere die logo.scss-Datei

function Logo() {
  useEffect(() => {
    const h1Timer = setTimeout(() => {
      // Hier kann weitere Logik hinzugefügt werden, falls erforderlich
    }, 500);

    return () => {
      clearTimeout(h1Timer);
    };
  }, []);

  return (
    <div className="logo__container small-screen-present">
      <div className="logo-wrapper">
        <span className="logo-text">NO</span>
      </div>
    </div>
  );
}

export default Logo;


