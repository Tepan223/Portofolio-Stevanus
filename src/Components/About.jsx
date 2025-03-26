import React from 'react';
import Headers from './Headers';
import '../Style/About.css'

function About() {
  const birthDate = new Date(2003, 0, 1)

  return (
    <div>
      <div>
        <Headers/>
      </div>
      <div className='about'>
        <div className='about-content'>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;
