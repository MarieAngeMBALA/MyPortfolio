import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import C from '../assets/tech/C.png';

const ServiceCard = ({ index, title, icon }) => {
  return (
  <>
  <style>
    {`
      .bg-jetLight {
        background-color: #6e523e; 
      }  
      
    `}
  </style>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taup text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </>
  );
};

const About = () => {
  return (
    <>
    <style>
        {`
          /* Assurez-vous d'inclure ces styles dans votre fichier CSS principal ou dans une balise <style> dans votre composant */
          .container {
            display: flex;
            justify-content: flex-start; /* Alignement à gauche */
            width: 100%; /* Prend toute la largeur du conteneur parent */
          }
          
          .circle-image {
            width: 100px; /* Taille de l'image */
            height: 100px; /* Hauteur égale à la largeur pour un cercle parfait */
            border-radius: 50%; /* Rend l'image circulaire */
            object-fit: cover; /* Assure que l'image couvre toute la zone sans être déformée */
          }

          .text{
            color: black;
          }

        `}
    </style>
  
    <div  className="-mt-[6rem]" >
      <motion.div variants={textVariant()}>
        <div className="container">
          <img src={C} alt="Ma photo" className="circle-image" />
        </div>
        <p className={styles.sectionSubText}>WELCOME TO MY WORLD - SIMPLICITY & EXPERTISE 😀</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text text-[20px] max-w-3xl leading-[30px]">
       I'm passionate about the digital world and emerging technologies. 
       I like to turn anything complicated into something accessible. 
       I'll let my skills speak for themselves, inviting you to discover 
       my work and my achievements.
       <p> <b>My personality can be summed up in 4 points:</b> </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
   
    </>
  );
};

export default SectionWrapper(About, 'about');
