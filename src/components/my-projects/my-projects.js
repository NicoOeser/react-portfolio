import React, { useEffect, useRef, useState } from 'react';
import './my-projects.scss';
import leftarrow from '../../assets/icons/arrow-left-circle.svg';
import rightarrow from '../../assets/icons/arrow-right-circle.svg';
import join from '../../assets/projects/join.png';
import elpolloloco from '../../assets/projects/el-pollo-loco.png';
import simplecrm from '../../assets/projects/simple-crm.png';
import portfolioold from '../../assets/projects/portfolio-old.png';

function MyProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsRef = useRef(null);

  useEffect(() => {
    const currentRef = projectsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.3 }
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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div ref={projectsRef} id='projects' className={`section section-projects ${isVisible ? 'reveal' : ''}`}>
      <article className='article-my-projects'>
        <h2>My Projects</h2>
        <p>These are some of my favorite projects. I'm always looking for challenges to learn from. Any feedback is also appreciated!</p>
      </article>
      <div className='slider-container'>
        <button className='slide-btn front-slide' onClick={prevSlide}>
          <img className='arrow-img' src={leftarrow} alt="left arrow" />
        </button>

        <div className='slides'>
          {[{ image: join, title: 'Join', description: 'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', technologies: 'Javascript | HTML | CSS', liveLink: 'https://join.nicolas-oeser.de', githubLink: 'https://github.com/NicoOeser/Join' },
          { image: portfolioold, title: 'Portfolio-Old', description: 'First version of my portfolio.', technologies: 'Angular | Typescript | SCSS', liveLink: 'https://nicolas-oeser.de', githubLink: 'https://github.com/NicoOeser/angular-portfolio' },
          { image: simplecrm, title: 'Simple-CRM', description: 'A very Simple Customer Relationship Management system working with CRUD functionality.', technologies: 'Angular | Typescript | Material Design | Firebase', liveLink: 'https://simple-crm.nicolas-oeser.de', githubLink: 'https://github.com/NicoOeser/simple-crm' },
          { image: elpolloloco, title: 'El Pollo Loco', description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.', technologies: 'Javascript | HTML | CSS', liveLink: 'https://el-pollo-loco.nicolas-oeser.de/', githubLink: 'https://github.com/NicoOeser/el-pollo-loco' }].map((slide, index) => (
            <div key={index} className='slide-item' style={{ transform: `translateX(${index === currentSlide ? '0%' : `${(index - currentSlide) * 100}%`})` }}>
              <div className='project-description'>
                <h2 translate='no'>{slide.title}</h2>
                <span translate='no'>{slide.technologies}</span>
                <p translate='yes'>{slide.description}</p>
                <div className='project-btn-container'>
                  <a translate='no' className='project-btn' href={slide.liveLink} target='_blank' rel='noreferrer'>Live-View</a>
                  <a translate='no' className='project-btn' href={slide.githubLink} target='_blank' rel='noreferrer'>GitHub</a>
                </div>
              </div>
              <img className='project-img' src={slide.image} alt={slide.title} style={{ display: 'unset' }} />
            </div>
          ))}
        </div>

        <div className='dots-container'>
          {[0, 1, 2, 3].map((index) => (
            <button key={index} className={`slider-dot ${index === currentSlide ? 'active-dot' : ''}`} data-id={index} onClick={() => goToSlide(index)}></button>
          ))}
        </div>

        <button className='slide-btn back-slide' onClick={nextSlide}>
          <img className='arrow-img' src={rightarrow} alt="right arrow" />
        </button>
      </div>
    </div>
  );
}

export default MyProjects;
