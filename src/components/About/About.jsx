import React from 'react';
import './About.css';
import theme_pattern from '../../assets/bc.jpg';  // This will be used as a background pattern
import profile_image from '../../assets/MANAB IMAGE.jpg';

const About = () => {
  return (
    <div id ='about'className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img className="pattern-bg" src={theme_pattern} alt="pattern" /> */}
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_image} alt="Profile" />

          <div className="about-para">
            <p>I am an interested student aiming to develop impressive web pages.</p>
            <p>My passion for web development goes beyond building — it's about creating something impactful.</p>

            <div className="about-skill">
              <div className="about-skill">
                <p>HTML & CSS</p> <hr style={{ width: '50%' }} />
              </div>
              <div className="about-skill">
                <p>PYTHON</p> <hr style={{ width: '50%' }} />
              </div>
              <div className="about-skill">
                <p>JAVASCRIPT</p> <hr style={{ width: '50%' }} />
              </div>
              <div className="about-skill">
                <p>BOOTSTRAP & TAILWIND</p> <hr style={{ width: '50%' }} />
              </div>
            </div>
          </div>
        </div>
<div className="about-achievements-container">
  <div className="about-achievement">
    <h1>10+</h1>
    <p>Years of Experience</p>
  </div>
  
  <div className="vertical-divider"></div>

  <div className="about-achievement">
    <h1>90+</h1>
    <p>Projects</p>
  </div>

  <div className="vertical-divider"></div>

  <div className="about-achievement">
    <h1>15+</h1>
    <p>Happy Clients</p>
  </div>
</div>


      </div>
    </div>
  );
};

export default About;
