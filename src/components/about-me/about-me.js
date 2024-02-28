import React, { useEffect, useRef, useState } from 'react';
import './about-me.scss';
import Me from '../../assets/me.png';

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const currentRef = aboutMeRef.current; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef); 
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div id='about-me' className="section section-about-me reveal">
      <div ref={aboutMeRef} className={`about-me-wrapper ${isVisible ? 'fade-in' : ''}`}>
        <img className='me me-img' src={Me} alt='Nicolas Oeser' style={{ display: 'unset' }} />
        <article className='aritcle-about-me'>
          <div className='about-me'>
            <div className='about-me-text' translate='yes'>
              <h2>About me</h2>
              <p>My love of technology started at a young age when I got my first computer, from gaming to hardware, my interests were diverse.</p>
              <p>Now that I no longer find fulfilment in my current job, I remembered my childhood. I quickly realised that this was exactly where my future lay.
                So I started studying at the "Developer Academy" on part-time basis and discovered software development, in special front-end development.</p>
              <p>I'm still here today, learning something new every day and looking for new challenges to expand my knowledge and experience.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AboutMe;
