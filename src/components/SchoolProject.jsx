import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import poubelle from '../assets/projects/poubelle.png';
import java from '../assets/projects/java.png';
import code from '../assets/projects/code.png';
import lid from '../assets/projects/lid.png';
import micro from '../assets/projects/micro.png';
import mobile from '../assets/projects/mobile.png';

const SchoolProject = () => {
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
                        <h1 className='titre1'>Mobile application similar to Deezer </h1>
                        <h2 className='titre2'>BAC +4 | 2nd year of the engineering cycle</h2>
                        <p>2023</p>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  Kotlin and Flutter programming language</li>
                            <li><b class="fas fa-user"></b>  Use of remote APIs and state Management </li>
                        </ul>
                        <p>The aim of this project was to get an initial introduction to mobile dev using modern tools.</p>    
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        src={mobile} // Remplacez par le chemin de votre image
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
                        <h1 className='titre1'>Automatic garage with RFID badge | Mechatronics project </h1>
                        <h2 className='titre2'>BAC +3 | 1st year of the engineering cycle</h2>
                        <p>2023</p>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  Arduino for the code</li>
                            <li><b class="fas fa-user"></b>  SolidWorks for the design and 3D printing </li>
                            <li><b class="fas fa-user"></b>  Making PCB (Shields with KICAD) & Use of microcontrollers</li>
                        </ul>
                        <p>As an end-of-year project, we had to apply almost all the concepts we had learnt during the year, 
                            from mechanical design and computer code to the physical construction of the mini garage.</p>    
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        src={micro} // Remplacez par le chemin de votre image
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
                        <h1 className='titre1'>Automatic language detection | LID Artificial Intelligence </h1>
                        <h2 className='titre2'>BAC +3 | 1st year of the engineering cycle</h2>
                        <p>2023</p>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  Python as a programming language in Jupyter Notebook</li>
                            <li><b class="fas fa-user"></b>  Testing several models: RandomForest, MLP, Decision Tree, etc.</li>
                            <li><b class="fas fa-user"></b>  Data partitioning and K-Fold cross-validation</li>
                            <li><b class="fas fa-user"></b>  1st place in a Kaggle competition with SVC model </li>
                        </ul>
                        <p>The aim of this project was to create an AI that could detect the different languages of an audio file (TED conference audio files).</p>    
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        src={lid} // Remplacez par le chemin de votre image
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
                        <h1 className='titre1'>Solitaire and MasterMind game in C </h1>
                        <h2 className='titre2'>BAC +3 | 1st year of the engineering cycle</h2>
                        <p>2022 - 2023</p>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  C programming language in CodeBlock IDE</li>
                            <li><b class="fas fa-user"></b>  GCC Compiler (GNU Compiler Collection)</li>
                            <li><b class="fas fa-user"></b>  Use of standard functions and libraries : conio.h, time.h, srand(), etc. </li>
                        </ul>
                        <p>This project was carried out in the form of a tutored project in which we had to create a Mastermind game purely in 
                            C language that ran on a cmd while having a pleasant console interface and above all being functional in 1 month.</p>    
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        src={code} // Remplacez par le chemin de votre image
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
                        <h1 className='titre1'>Development of an accounting software in JAVA </h1>
                        <h2 className='titre2'>BAC +2 | 2nd year of preparatory class</h2>
                        <p>2022</p>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  Eclipse as the IDE, UML for project management and SQL for data management</li>
                            <li><b class="fas fa-user"></b>  Object-oriented programming (Classes, Heritage, Overloading, etc.)</li>
                            <li><b class="fas fa-user"></b>  JavaFx for interface design </li>
                            <li><b class="fas fa-user"></b> PhpMyAdmin for administering the MYSQL server</li>
                            <li><b class="fas fa-user"></b> Practical application of accounting concepts such as: General Ledger, Balance Sheet, Depreciation & Provisions, Cost Accounting, etc...</li>
                        </ul>
                        <p>This project involved designing an accounting application to enable a company to view its profit and loss accounts, balance sheet, etc.</p>    
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        src={java} // Remplacez par le chemin de votre image
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
                        <h1 className='titre1'>Design a stand-alone waste bin </h1>
                        <h2 className='titre2'>BAC +1 | 1st year of preparatory class</h2>
                        <p>2021</p>
                        <br />
                        <ul class="skill-liste">
                            <li><b class="fas fa-user"></b>  Introduction to sensors (Proximity and Weight)</li>
                            <li><b class="fas fa-user"></b>  Creation of a logic circuit with gates: AND,OR,NAND,NOR,XOR etc... </li>
                            <li><b class="fas fa-user"></b> prototyping</li>
                        </ul>
                        <p>The idea was to apply the concepts of digital electronics (logic gates) to design this autonomous dustbin. 
                            When the bin is full, it no longer opens to receive the rubbish, but signals this to the maintenance staff.</p>    
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                        animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                        whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                        viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        src={poubelle} // Remplacez par le chemin de votre image
                        alt="Web Design"
                        className="image-block"/>  
        </div>
    </> 
  );
};

export default SchoolProject;
