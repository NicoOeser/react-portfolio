import React from 'react';
import Header from '../header/header';
import Frontpage from '../frontpage/frontpage';
import VerticalBanner from '../vertical-banner/vertical-banner';
import AboutMe from '../about-me/about.me';
import MySkills from '../my-skills/my-skills';
import MyProjects from '../my-projects/my-projects';
import Footer from '../footer/footer';

function Content() {
  return (
    <div className="content-container">
      <Header />
      <VerticalBanner />
      <Frontpage />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default Content;
