// src/components/Hero/Hero.jsx
import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import './Home.scss';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="hero__video"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay" />
      
      <div className="hero__content">
        <div className={`hero__content-wrapper ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero__title">
            Exquisite <span className="hero__title-highlight">10k Certified Gold</span>
          </h1>
          
          <p className="hero__subtitle">
            Elevate Your Style with Affordable Luxury
          </p>
          
          <div className="hero__buttons">
            <button className="hero__button hero__button--primary">
              Shop Now
              <Camera className="hero__button-icon" />
            </button>
            
            <button className="hero__button hero__button--secondary">
              Discover Charms
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;