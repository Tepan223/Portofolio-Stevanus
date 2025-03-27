import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Headers from './Headers';
import '../Style/Home.css';

function Home() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(imgRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <div>
      <Headers />
      <div className='home'>
        <div className='home-content'>
          <div className='content'>
            <div className='text-content-home' ref={textRef}>
              <h1>Hi, I'm <br/><span>Stevanus Gabriel</span></h1>
              <p>Web Developer</p>
              <p>
                As a Web Developer, I have a great interest in creating a functional website. 
                With expertise in website development, I always try to create websites with 
                the most attractive designs possible.
              </p>
              <a href="" download className='download'>Download CV</a>
            </div>
            <div className='img-content-home' ref={imgRef}>
              <img src="/Profile.jpg" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
