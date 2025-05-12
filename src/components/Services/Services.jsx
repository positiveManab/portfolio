import React from 'react';
import { FaMobileAlt, FaPaintBrush, FaCode, FaThumbsUp, FaPenNib, FaImage } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaMobileAlt />,
    title: 'App Design',
    description: 'Crafting intuitive and elegant mobile app interfaces for Android and iOS platforms.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Graphics Design',
    description: 'Creating eye-catching visuals, logos, and branding materials for all media types.',
  },
  {
    icon: <FaCode />,
    title: 'Web Design',
    description: 'Designing modern, responsive websites with a focus on UX and performance.',
  },
  {
    icon: <FaThumbsUp />,
    title: 'Social Media',
    description: 'Managing content and design for impactful social media presence and growth.',
  },
  {
    icon: <FaPenNib />,
    title: 'Content Writing',
    description: 'Writing engaging and SEO-optimized content for websites, blogs, and social media.',
  },
  
 
];

const Services = () => {
  return (
    <div id='services'className="services-container">
      <h1 className="services-title">My Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
