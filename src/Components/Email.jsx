import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Style/Email.css'
const Email = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const serviceId = 'service_n0pxcrh'; 
        const templateId = 'template_dq97l1r';
        const publicKey = 'jGUF81BoqWsJwFyH';

        const templateParams = {
            name: name,
            email: email,
            message: message,
            to_name: 'Stevanus Gabriel'
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully:', response);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
    };
    return (
        <form onSubmit={handleSubmit} className="email-form">
            <label htmlFor="name" className='email-name'>Your Name</label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} id="name" className='inp-name'/>
            <label htmlFor="email" className='email-email'>Your Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className='inp-email'/>
            <label htmlFor="message" className='email-message'>Your Message</label>
            <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} id="message"></textarea>
            <button type="submit" className='email-send'>Send Email</button>
        </form>
        
    );
}

export default Email;