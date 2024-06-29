import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import coupe from '../assets/projects/coupe.png';
import mans from '../assets/projects/mans.png';

const Competitions = () => {
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
                    <motion.div
                        className="text-block"
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}>
                        <h1 className='titre1'>24H DU CODE</h1>
                        <h2 className='titre2'>Le Mans, France</h2>
                        <p>2024</p>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  We have used almost all the concepts of embedded systems</li>
                        </ul>
                        <p>Here, we worked with the teams at STMicroelectronics to control a console game using a computer during 24 hours non-stop.</p>    
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        src={mans} // Remplacez par le chemin de votre image
                        alt="Web Design"
                        className="image-block"/>  
        </div>
                                
        <div class="container">  
                    <motion.div
                        className="text-block"
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}>
                        <h1 className='titre1'>French Robotics Cup  </h1>
                        <h2 className='titre2'>France | With the ENSIM robotics club</h2>
                        <p>2023</p>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  Arduino and Raspberry programming</li>
                            <li><b class="fas fa-user"></b>  Communication protocols (UART,I2C) </li>
                        </ul>
                        <p>The aim was to create a robot that would bake a cake and store the remaining cherries in a basket. In this project, 
                            I was responsible for managing the basket so that it could count the number of cherries and display them.</p>
                            <p>For more information on the competition :<a style={{color: 'blue'}} href="https://www.coupederobotique.fr/edition-2023/le-concours/reglement-2023/">Click here</a></p>    
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        src={coupe} // Remplacez par le chemin de votre image
                        alt="Web Design"
                        className="image-block"/>  
        </div>
    </> 
  );
};

export default Competitions;
