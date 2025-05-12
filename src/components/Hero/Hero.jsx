import React from 'react';
import './Hero.css';
import profileImg from '../../assets/MANAB IMAGE.jpg';

const Hero = () => {
  return (
    
    
    <div id='home' className='Hero'>
      <img src={profileImg} alt="Profile" className="hero-image" />
      
      <h1>
        I am <span>Manab</span>,
      </h1>
      
      <p>
        A passionate <strong>Frontend Developer</strong> currently pursuing B.Tech from <strong>NIT Patna</strong>. I love building responsive, user-friendly web interfaces and continually exploring modern web technologies like React.js, Tailwind CSS, and more.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="resume">My resume</div>
        
        </div>  
       </div>
  );
};

export default Hero;
