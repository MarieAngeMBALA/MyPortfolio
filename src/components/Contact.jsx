import React from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import linkedin from '../assets/logo/linkedin.png';

const Footer = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                // Handle success actions here (e.g., showing a confirmation message)
            }, (error) => {
                console.log('Failed to send email.', error.text);
                // Handle errors here
            });
    };
  return (
    <>
      <footer className="footer">
          <div className="footer-section">
              <h4>So are you interested in my CV and my personality?</h4>
              <h4>Don't wait any longer, contact me.</h4>
              <br /><br />
              <h4 style={{fontSize: '18px'}}> <strong>SOCIAL MEDIA</strong> </h4>
              <a href="https://www.linkedin.com/in/marie-ange-mbala-374b48222/" style={{color:'black'}}> <img src={linkedin} alt="linkedin" style={{width:'10%'}}/> Marie-Ange MBALA</a>
              
              
          </div>
          <div className="footer-section">
              <h4 style={{fontSize: '18px'}}> <strong>MY INFORMATIONS</strong> </h4>
              <p>Paris, France</p>
              <p>+33 (0) 7 49 85 59 02</p>
              <p>mbalamarieange@gmail.com</p>
              <p><i style={{fontSize: '14px', color: 'gray'}}>International mobility</i></p>
          </div>
          <div className="footer-section">
          <h4 style={{fontSize: '18px'}}> <strong>CONTACT-ME</strong> </h4>
        <form id="contact-form" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className='buton'>SUBMIT</button>
        </form>

          </div>
          <div className="footer-section">
              
          </div>
          
      </footer>
      <p style={{backgroundColor:'#414141'}}>© Copyright Marie-Ange MBALA. All Rights Reserved</p>
      </>
      
  );
};

export default Footer;



