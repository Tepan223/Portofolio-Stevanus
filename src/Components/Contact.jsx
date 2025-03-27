import React from 'react';
import Headers from './Headers';
import '../Style/Contact.css'

function Contact() {
  return (
    <div>
      <div>
        <Headers/>
      </div>
      <div className='contact'>
        <div className='contact-home'>
            <div className='contact-content'>
                <div className='contact-left'>
                    <img src="/PP.jpg" alt="" />
                    <h1>Stevanus Gabriel</h1>
                    <p>Web Developer</p>
                    <p>I am available for freelance work. Connect with me via call in to my account.</p>
                    <table>
                        <tr>
                            <td>Phone</td>
                            <td>:</td>
                            <td>0857-7000-2971</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>tepan.gabriel@gmail.com</td>
                        </tr>
                    </table>
                    <p>Find With Me</p>
                    <div>
                        <a href=""><img src="/Gmail.png" alt="" /></a>
                        <a href=""><img src="/WhatsApp.png" alt="" /></a>
                        <a href=""><img src="/Instagram.png" alt="" /></a>
                    </div>
                </div>
                <div className='contact-right'>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
