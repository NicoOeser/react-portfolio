import React, { useEffect } from 'react';
import './logo.scss'; 

function Logo() {
  useEffect(() => {
    const h1Timer = setTimeout(() => {
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


