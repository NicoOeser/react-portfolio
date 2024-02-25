import React from 'react';
import './about-me.scss';
import Me from '../../assets/me.png';

function AboutMe() {
  return (
    <div id='about-me' className="section section-2 reveal">
      <div className='about-me-wrapper'>
        <img className='me img-placeholder' src={Me} alt='Nicolas Oeser' style={{ display: 'unset' }} />
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