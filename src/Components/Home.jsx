import React from 'react';
import Headers from './Headers';
import '../Style/Home.css'

function Home() {
  return (
    <div>
      <div>
        <Headers/>
      </div>
      <div className='home'>
        <div className='home-content'>
          <div className='content'>
            <div className='text-content-home'>
              <h1>Hi, I'm <br/><span>Stevanus Gabriel</span></h1>
              <p>Web Developer</p>
              <p>As a Web Developer, I have a great interest in creating a functional website. With expertise in website development, I always try to create websites with the most attractive designs possible.</p>
            </div>
            <div className='img-content-home'>
              <img src="/Profile.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
