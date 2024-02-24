import React, { useState, useEffect } from 'react';
import './frontpage.scss';
import OverlayContact from '../overlay-contact/overlay-contact';


function Frontpage() {
  const [text, setText] = useState([]);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  function formatTextWithColors(text) {
    const colorMap = {
      'import from extends new export default': 'red',
      'class constructor NicolasOeser': 'blue',
      'Developer': 'yellow',
      'Date getFullYear code drinkCoffee': 'green',
      'this super': 'gray',
      'hrs cups': 'orange',
      '10 1984 true null': 'purple',
      '=': 'red',
    };

    const words = text.split(/(\b|\W)/);
    return words.map((word, index) => {
      let color = 'white';
      Object.entries(colorMap).forEach(([keywords, colorName]) => {
        if (keywords.split(' ').includes(word)) {
          color = colorName;
        }
      });
      return <span key={index} className={color}>{word}</span>;
    });
  }

  const codeText = `import Developer from "./Developer";

  class NicolasOeser extends Developer {
    constructor() {
      super();
      this.age = new Date().getFullYear() - 1984;
      this.favSkills = {
        teamPlayer: 10,
        readyToLearn: 10,
        endurance: 10,
      };
      this.hasPassion = true;
    }
    givesUp = null;
    lovesNature = true;

    code(hrs) {...
    }

    drinkCoffee(cups) {...
    }
  }

  export default new NicolasOeser();
  `;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= codeText.length) {
        setText(formatTextWithColors(codeText.substring(0, currentIndex)));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed as needed

    return () => clearInterval(interval);
  }, [codeText]);

  return (
    <main className="content">
       {overlayVisible && <OverlayContact onClose={handleCloseOverlay} />}
      <div className="section section-intro reveal">
        <article>
          <div className="intro-wrapper" translate="yes">
            <div className="intro-overlay"></div>
            <h3>Hi, my name is</h3>
            <h2>Nicolas Oeser</h2>
            <p>
              I am a German-speaking front-end web developer with a passion for creating efficient websites and web applications using core technologies such as HTML5, CSS3 and JavaScript.
            </p>
            <div className="say-hi-container">
              <button className="say-hi-btn" onClick={toggleOverlay}>
                Say hi!
              </button>
            </div>
          </div>
          <aside>
            <div className='code-art-container-back'>
              <div className='code-bar'>
                <div className='code-bar-dots-container'>
                  <div className='code-bar-dots inactive-dot'></div>
                  <div className='code-bar-dots inactive-dot'></div>
                  <div className='code-bar-dots inactive-dot'></div>
                </div>
                <div className='code-art-content-back'>
                  <pre>
                    <span className="gray">@</span><span className="red">mixin</span> <span className="green">header</span> {'{\n'}
                    {'  '}<span className="green">header</span> {'{\n'}
                    {'    '}font-size: <span className="purple">18</span><span className="red">px</span>;<br />
                    {'    '}<span className="gray">@</span><span className="red">include</span> <span className="green">flex-spaced-between</span>;<br />
                    {'  '}{'}\n'}
                    {'}'}
                  </pre>
                </div>
              </div>
            </div>
            <div className='code-art-container-front'>
              <div className='code-bar'>
                <div className='code-bar-dots-container'>
                  <div className='code-bar-dots red-dot'></div>
                  <div className='code-bar-dots yellow-dot'></div>
                  <div className='code-bar-dots green-dot'></div>
                </div>
                <div className='code-art-content-front'>
                  <pre>{text}</pre>
                </div>
              </div>
            </div>
          </aside>
        </article>
      </div>
     
    </main>
  );
}

export default Frontpage;

