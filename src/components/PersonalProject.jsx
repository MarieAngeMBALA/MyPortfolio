import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import portfolio from '../assets/projects/portfolio.png';
import othello from '../assets/projects/othello.png';

const PersonalProject = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Simuler le changement de visibilité
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 400);  // Délai avant que les éléments deviennent visibles

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
        <div class="container">
                    <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={portfolio} 
                    alt="Web Design"
                    className="image-block"
                    />
                    <motion.div 
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                        <h1 className='titre1'>FullStack Portfolio project </h1>
                        <p>January 2024</p>
                        <br />
                        <h3 className='titre3'>This portfolio is a practical example</h3>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  MERN Stack development (Mongodb - Express - React - Nodejs)</li>
                            <li><b class="fas fa-user"></b>  Tailwind for some design</li>
                            <li><b class="fas fa-user"></b> Mastery of non-relational databases</li>
                        </ul>
                        <p>It's worth noting that before opting for a MERN Stack, I explored several frameworks (Angular, etc.) 
                        and after comparing them, I chose to use React to create this portfolio and showcase my skills.</p>    
                    </motion.div>
        </div>

        <div class="container">
                    <motion.img
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    src={othello} 
                    alt="Web Design"
                    className="image-block"
                    />
                    <motion.div 
                    className="text-block"
                    initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                    animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                    whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                    viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                        <h1 className='titre1'>OTHELLO Player game optimization | Neutral Network Models </h1>
                        <p>Octobre 2023</p>
                        <br />
                        <h3 className='titre3'>5th place in the Kaggle competition on deep learning</h3>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  Comparison of several models : LSTM, MLP, RMSProp</li>
                            <li><b class="fas fa-user"></b>  Optimisation of model architecture, taking into account the number of Epochs, learning rate, etc.</li>
                            <li><b class="fas fa-user"></b> Implémentation of a CNN network and optimizing its architecture</li>
                        </ul>
                        <p>The aim of this competition was to optimise an AI that would play the role of an Othello player and win every time.</p>    
                    </motion.div>
        </div>
    </> 
  );
};

export default PersonalProject;
