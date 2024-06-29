import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import devops from '../assets/projects/devops.png';
import devindus from '../assets/projects/devindus.png';
import belgium from '../assets/projects/belgium.png';

const WorkExperiences = () => {
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
    <div className="container">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        src={devops}
        alt="Web Design"
        className="image-block"
      />
      <motion.div 
        className="text-block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <h1 className='titre1'>Continuous Integration and Deployment Internship (CI/CD Engineering)</h1>
        <h2 className='titre2'>Austria | OPmobility</h2>
        <p>May - June 2025</p>
        <br />
        <h3 className='titre3'>Automate builds using Jenkins and Azur devops</h3>
        <br />
        <ul className="skill-liste">
          <li><b className="fas fa-user"></b> Bash command to run the software in cmd (msbuild)</li>
          <li><b className="fas fa-user"></b> Jenkins as an automation server</li>
          <li><b className="fas fa-user"></b> Azur devops for version management and pipeline creation</li>
        </ul>
        <p>The aim was to ensure continuous deployment of the software by automating builds of the various code contained 
          in the azur devops repos. This made it possible to increase the reliability 
          and efficiency of software updates by automating the management of integrations and deployments.</p>    
      </motion.div>
    </div>
    
    <div class="container">  
                <motion.div
                  className="text-block"
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}>
                    <h1 className='titre1'>Work assignment as an Engineering Software Development Engineer</h1>
                    <h2 className='titre2'>Belgium | OPmobility Plant</h2>
                    <p>July -  September 2024</p>
                    <br />
                    <h3 className='titre3'>Write Python scripts to ensure machine-software communication</h3>
                    <br />
                    <ul class="skill-liste">
                        <li><b class="fas fa-user"></b>  Python for writing code that is consistent with C++ output</li>
                        <li><b class="fas fa-user"></b>  Creating an installer with 'Advanced Installer' tool </li>
                        <li><b class="fas fa-user"></b> Security audits and certifications (ISO27001, etc...)</li>
                        <li><b class="fas fa-user"></b> Contact with certification authorities (DigiCert) to sign the Code and prove authenticity</li>
                        <li><b class="fas fa-user"></b> Pentesting (PowerShell Empire)</li>
                        <li><b class="fas fa-user"></b> Python script to establish communication with an FTP or SFTP server.</li>
                    </ul>
                    <p>Creating this software was a mixture of algorithmic complexity, improving the user interface and practising 
                      object-oriented programming using a multitude of tools, not forgetting the 'project management' aspect.</p>    
                </motion.div>
                <motion.img
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  src={belgium}// Remplacez par le chemin de votre image
                  alt="Web Design"
                  className="image-block"/>  
    </div>

    <div class="container" >
                <motion.img
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  src={devindus} // Remplacez par le chemin de votre image
                  alt="Web Design"
                  className="image-block"/>  
                <motion.div
                  className="text-block"
                  initial={{ opacity: 0, y: 50 }}  // Commence avec l'opacité à 0 et légèrement décalé sur l'axe Y
                  animate={isVisible ? { opacity: 1 } : {}}   // Anime à l'opacité 1 et revient à la position Y originale
                  whileInView={{ opacity: 1, y: 0 }} // Garantit que l'élément reste visible et à sa place
                  viewport={{ once: true, amount: 0.4 }} // L'animation se déclenche quand 80% de l'élément est visible
                  transition={{ duration: 0.5, ease: "easeIn" }}>
                    <h1 className='titre1'>C++ and C# developer</h1>
                    <h2 className='titre2'>France | Plastic Omnium (R&D Center)</h2>
                    <p>September 2023 -  June 2024</p>
                    <br />
                    <h3 className='titre3'>Development of industrial filament winding software with the calculation part in C++ and the interface in C#</h3>
                    <br />
                    <ul class="skill-liste">
                        <li><b class="fas fa-user"></b>  Creating and managing Nodelocked and Floating licences with FlexLM</li>
                        <li><b class="fas fa-user"></b>  Improving the performance of the WinForms application with Multithreading</li>
                        <li><b class="fas fa-user"></b>  Perfect knowledge of .NET applications</li>
                        <li><b class="fas fa-user"></b> Applications of object-oriented programming concepts with C++</li>
                        <li><b class="fas fa-user"></b> Complex mathematical algorithms for calculations</li>
                        <li><b class="fas fa-user"></b> Optimisation of Runtimes (DotTrace) and Bugg fixes</li>
                        <li><b class="fas fa-user"></b> UI C# design</li>
                        <li><b class="fas fa-user"></b>  Writing a user guide (Jekyll, Web programming(Html/CSS) + WordPress)</li>
                        <li><b class="fas fa-user"></b> Project management with in-depth knowledge of Azur Devops</li>
                        <li><b class="fas fa-user"></b> Visual Studio as IDE</li>
                    </ul>
                    <p>Creating this software was a mixture of algorithmic complexity, improving the user interface and practising 
                      object-oriented programming using a multitude of tools, not forgetting the 'project management' aspect.</p>    
                </motion.div>
    </div>
    </> 
  );
};

export default WorkExperiences;
