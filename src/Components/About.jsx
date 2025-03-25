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
      <div className='page-about'>
        <div className='about'>
          <div className='img-about'>
            <img src="" alt="" />
          </div>
          <div className='about-me'>
            <h1>About Me</h1>
            <table>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>Tepan</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>:</td>
                <td>20</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
