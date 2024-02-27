import React, { useEffect } from 'react';
import './my-skills.scss';
import angular from '../../assets/icons/angular-icon.svg';
import firebase from '../../assets/icons/firebase-icon.svg';
import git from '../../assets/icons/git-icon.svg';
import javascript from '../../assets/icons/javascript-icon.svg';
import html from '../../assets/icons/html5-icon.svg';
import material from '../../assets/icons/materialdesign-icon.svg';
import react from '../../assets/icons/reactjs-icon.svg';
import scrum from '../../assets/icons/scrum-icon.svg';
import typescript from '../../assets/icons/typescript-icon.svg';
import vscode from '../../assets/icons/vscode-icon.svg';
import api from '../../assets/icons/api-icon.svg';
import css from '../../assets/icons/css-icon.svg';

function MySkills() {
  useEffect(() => {
    const skillsSection = document.getElementById('skills');
    const skillsWrapper = document.querySelector('.skills-crad-wrapper');

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillsWrapper.classList.add('reveal');
        }
      });
    });

    sectionObserver.observe(skillsSection);

    return () => {
      sectionObserver.unobserve(skillsSection);
    };
  }, []);

  return (
    <div id='skills' className="section section-3 reveal">
      <article className='article-skills' translate='yes'>
        <h2>My Skills</h2>
        <p>The following skills are part of my toolbox. One of the things I love is learning and trying new technologies</p>
        <p>I am currently working with{' '}
          <span>
            <a href='https://react.dev' target="_blank" rel="noreferrer" translate='no'>
             React.js
            </a>
          </span>
        </p>
      </article>
      <div className='skills-crad-wrapper'>
        <div className='skills-crad skills-card-angular'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={angular} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>Angular</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-react'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={react} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>React.js</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-javascript'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={javascript} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>JavaScript</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-typescript'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={typescript} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>TypeScript</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-html'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={html} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>HTML</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-css'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={css} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>CSS / SCSS</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-firebase'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={firebase} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>Firebase</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-git'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={git} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>Git</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-scrum'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={scrum} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>Scrum</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-restapi'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={api} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>REST-API</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-materialdesign'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={material} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>Material Design</h2>
          </div>
        </div>
        <div className='skills-crad skills-card-vscode'>
          <div className='skills-card-content'>
            <div className='skill-card-icon'>
            <img className='icon-img' src={vscode} alt="LinkedIn Icon" />
            </div>
          </div>
          <div className='skills-card-description'>
            <h2>VS Code</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
