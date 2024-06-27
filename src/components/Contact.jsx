import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer-section">
              <h4>So are you interested in my CV and my personality? Don't wait any longer, contact me.</h4>
              <a href="/about">ABOUT</a>
              <a href="/contact">CONTACT</a>
              <a href="/terms">TERMS</a>
              <a href="/privacy">PRIVACY</a>
              <a href="/cookies">COOKIES</a>
              <a href="/disclaimer">DISCLAIMER</a>
              <a href="/shop">© Copyright Marie-Ange MBALA. All Rights Reserved</a>
              
          </div>
          <div className="footer-section">
              <h4>MY INFORMATIONS</h4>
              <p>Paris, France</p>
              <p>+33 (0) 7 49 85 59 02</p>
              <p>mbalamarieange@gmail.com</p>
          </div>
          <div className="footer-section">
              <h4>CONTACT-ME</h4>
              <form>
                  <input type="text" placeholder="Name" />
                  <br />
                  <input type="email" placeholder="Email" />
                  <button type="submit">SUBMIT</button>
              </form>
          </div>
          <div className="footer-section">
              <h4>Social Media</h4>
              <a href="http://facebook.com"><i className="fa fa-facebook"></i></a>
              <a href="http://twitter.com"><i className="fa fa-twitter"></i></a>
              <a href="http://linkedin.com"><i className="fa fa-linkedin"></i></a>
          </div>
      </footer>
  );
};

export default Footer;



