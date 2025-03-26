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
          <div className='content-about'>
            <div className='text-content-about'>
              <h1>Personal Information</h1>
              <table>
              <tr>
                <td>Full Name</td>
                <td>:</td>
                <td>Stevanus Gabriel</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>Stevanus</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>:</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Place, Date of Birth </td>
                <td>:</td>
                <td>19 Oktober 2009, Jakarta</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>:</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td>Jl. Kebon Jeruk, Jakarta</td>
              </tr>
            </table>
            <h1>Profile</h1>
            <p>I am a passionate web developer with over 1 year of experience in building responsive websites. Mastering various web technologies,ranging from HTML, CSS, JavaScript.</p>
            <h1>Education</h1>
            <table>
              <tr>
                <td>SD Budi Bahasa</td>
                <td>:</td>
                <td>Jakarta, 2013-2021</td>
              </tr>
              <tr>
                <td>SMP Budi Bahasa</td>
                <td> :</td>
                <td>Jakarta, 2021-2024</td>
              </tr>
              <tr>
                <td>SMK Tri Ratna</td>
                <td>:</td>
                <td>Jakarta, 2024-2027</td>
              </tr>
            </table>
            </div>
            <div className='skills'>
              <h1>Skill</h1>
              <div className='skill-line-1'>
                <div>
                  <img src="/HTML.png" alt="HTML" />
                  <h1>HTML</h1>
                </div>
                <div>
                  <img src="/CSS.png" alt="CSS" />
                  <h1>CSS</h1>
                </div>
                <div>
                  <img src="/JS.png" alt="Java Script" />
                  <h1>Java Script</h1>
                </div>
              </div>
              <div className='skill-line-2'>
                <div>
                  <img src="/React.png" alt="React" />
                  <h1>React</h1>
                </div>
                <div>
                  <img src="/Vercel.png" alt="Vercel" />
                  <h1>Vercel</h1>
                </div>
                <div>
                  <img src="/GitHub.png" alt="GitHub" />
                  <h1>GitHub</h1>
                </div>
              </div>
              <div className='skill-line-3'>
                <div>
                  <img src="/Word.png" alt="Word" />
                  <h1>Word</h1>
                </div>
                <div>
                  <img src="/Excel.png" alt="Excel" />
                  <h1>Excel</h1>
                </div>
                <div>
                  <img src="/Canva.png" alt="Canva" />
                  <h1>Canva</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
