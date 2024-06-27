import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq } from '../assets';
import Typewriter from "typewriter-effect";
import python from '../assets/tech/python.webp';
import dotnet from '../assets/tech/dotnet.png';
import raspberry from '../assets/tech/raspberry.png';
import mern from '../assets/tech/mern.webp';
import git from '../assets/tech/git.png';
import C from '../assets/tech/C.png';
import down from '../assets/tech/down.png';

const Hero = () => {
  return (
    <>
      <style>
        {`
          .down {
            width: 50%;
            height: 80px;
          }
          @media (max-width: 1524px) {
            .down{
              width: 100%;
              height: 25px;
            }
          }
          @media (max-width: 768px) {
            .down{
              width: 100%;
              height: 25px;
            }
          }
          @media (max-width: 480px) {
            .down {
              width: 100%; 
              height: 20px;
            }
          }
          
          .logo-container {
            display: flex;
            position: absolute;
            bottom: 0px;
            width: 100%;
          
          }
       
          .about-text {
            padding: 20px;
            width: 50%;
            box-sizing: border-box;
            font-size: 16px;
            line-height: 1.6;
            color: black;
          }

          .about-section {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f9f9f9; /* Light grey background */
            padding: 40px 0;
          }
        `}
          
      </style>
      <section className="relative flex flex-col sm:flex-row w-full h-screen overflow-hidden bg-gray-100">
        <div className="flex-1 sm:w-3/5 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className={`${styles.paddingX} mx-auto`}>
            <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins text-[48px] sm:text-[90px]`}>
              <p style={{ color: 'white', WebkitTextStroke: '1.2px black' }}>Hi There! 👋🏻</p>
              <p>I'm <span className="text-battleGray">Marie-Ange <span className='text-gold-outline'>MBALA</span></span></p>
            </h1>
            <p className={`${styles.heroSubText} text-eerieBlack text-[25px] sm:text-base`}>
            Real-time systems Software Engineer...
            </p>
            <p className="text-blue-500 text-[25px]">
              <Typewriter
                options={{
                  strings: [
                    "Software Development",
                    "IA & Machine learning",
                    "Embedded system, IOT",
                    "Algorithmic trading", 
                          "3 years' experience",
                          "DevOps skills",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  typeSpeed: 1000
                }}
              />
            </p>
            
          </div>
        </div>
        <div className="relative sm:w-2/5 items-center justify-center shadow-lg" style={{ backgroundColor: '#d6d6d6', borderTopLeftRadius: '50% 100%', borderBottomLeftRadius: '50% 100%', borderTopRightRadius: '0', borderBottomRightRadius: '0' }}>
          <img
            className="absolute right-0 bottom-0 w-full sm:w-auto sm:h-[97vh] object-cover"
            src={shaq}
            alt="Shaquille"
          />
        </div>
        <div className="logo-container">
          
          <img src={down} alt="down" className="down" />
        </div>
        </section> 
    </>
  );
};

export default Hero;
